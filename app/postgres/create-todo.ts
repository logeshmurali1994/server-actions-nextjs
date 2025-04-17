'use server'

import { revalidatePath } from "next/cache";
import  pool  from '../../app/postgres/postgres';


export async function createTodo(prevState: any, formData: FormData) {
    const data = {
        text: formData.get('todo')
    }

    if (!data.text) {
        return { message: "todo is required" };
    }

    try {
        const client = await pool.connect();
        await client.query(`INSERT INTO todo (todo) VALUES ('${data.text}')`);
        revalidatePath('/');
        return { message: `todo "${data.text}" added successfully` };
    } catch (e) {
        console.log(e);  
        return { message: 'todo not added with some erroes' };
    }
}

export async function deleteTodo(id: number) {
    if (!id) {
        return { message: "id is required" };
    }
    
    try {
        const client = await pool.connect();
        await client.query(`DELETE FROM todo WHERE id = ${id}`);
        revalidatePath('/');
        return { message: `todo deleted successfully` };
    } catch (e) {
        console.log(e);
        return { message: 'todo not deleted with some erroes' };
    }

}