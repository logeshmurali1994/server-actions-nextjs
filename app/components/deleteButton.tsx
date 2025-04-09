'use client';

import { deleteTodo } from '../postgres/create-todo';

const DeleteButton = ({id}: any) =>{
    return (
        <button className="btn float-right" onClick={() => deleteTodo(id)} type="button" >Delete</button>
    )
}

export default DeleteButton;