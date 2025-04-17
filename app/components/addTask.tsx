'use client'
import { useFormState, useFormStatus } from "react-dom";
import { createTodo } from '../postgres/create-todo';

const initialState = {
    message: ''
}
const SubmitButton = () => {
    const { pending } = useFormStatus();
    
    return  <button className={`btn full-btn`} aria-disabled={pending} disabled={pending} type="submit">Add Task {pending}</button>
}

const AddTask = () => {
    const [state, formAction] = useFormState(createTodo, initialState)
    return (
        <form action={formAction}>
            <label htmlFor="todo"> Enter Task </label>
            <input name="todo" id="todo" type="text" />
            <SubmitButton />
            <p>{state?.message}</p>
        </form>
    )
}

export default AddTask;