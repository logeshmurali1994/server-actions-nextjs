'use client'

import { FormEvent } from "react"

export default function WithoutServerAction () {
    async function onsubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData  = new FormData(event.currentTarget);
        const response = await fetch('/api/submit',{
            method: 'POST',
            body: formData
        })


        const data = await response.json();
        console.log(data);
        

    }
    return (
        <form onSubmit={onsubmit}>
            <input type="text" name="name" />
            <button type="submit">Submit</button>
        </form>
    )
}