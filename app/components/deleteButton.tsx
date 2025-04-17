'use client';

import { deleteTodo } from '../postgres/create-todo';

const DeleteButton = ({id}: any) =>{
    // Server Action Without Form
    return (
        <button className="btn float-right" 
            onClick={async () => {
            await deleteTodo(id);
          }} 
          type="button" >Delete</button>
    )
}

export default DeleteButton;