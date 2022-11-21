import React, { useState } from "react";
import { v4 as randomId } from "uuid";
export default function ToDo() {
    const toDo = [
    {title: "test1", done: false, id: randomId()}, 
    {title: "test2", done: false, id: randomId()}];    
    const handleChange = (id) => {
        const newToDo = todos.map((todo) => {
            if (todo.id === id) {
                todo.done = !todo.done;
                console.log(todo.done)
            }
            return todo;
        });

        setTodos(newToDo)
    };

    const [todos, setTodos] = useState(toDo);
    return ( 
        <ul>
            {todos.map((todo) => (
            <li key={todo.id}>
                <input type="checkbox" id = {todo.id} name="todo1" value={todo.done} onChange={() => {
                    handleChange(todo.id)
                }} className="accent-blue-300"></input>
                <label htmlFor={todo.id} className={`dark:text-white ml-5 ${todo.done?"line-through":"no-underline"}`}>{todo.title}</label>
            </li>
            ))}
        </ul>
    )
}