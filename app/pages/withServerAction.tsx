
import * as React from "react"
import pool from '../postgres/postgres';
import AddTask from '../components/addTask';
import DeleteButton from '../components/deleteButton';

export async function WithServerAction() {

  const client = await pool.connect();

  let data = await client.query(`SELECT * from todo`);
  
  const { rows: todos } = data;

  return (
    <div className="wrapper">
      <AddTask />
        <div className="todo-list">
          <ul>
           {
              todos.map((todoItem: any) => (
                <li key={todoItem.id}>
                  {todoItem.todo}
                  <DeleteButton id={todoItem.id} />
                </li>
              ))
            }
          </ul>
        </div>
    </div>
 
  )
}
