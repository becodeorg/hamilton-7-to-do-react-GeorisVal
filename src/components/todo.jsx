import React, {useState} from "react";

export default function ToDO() {
    const initialTodos = ["First thing first", "Second thing second"];
    const toDoList = [
        {
            id: id,
            task: Task,
            complete: false
        }
    ];
    const [todos, setTodos] = useState(toDoList);
    return ( 
        <ul>
            {todos.map((todo) => (
                <li key={todo}>
                    <input type="checkbox" className="mr-2" onChange={e => initialTodos.pop(e)}></input>
                    <label for="checkbox" className="dark:text-white">{todo}</label>
                </li>
            ))}
        </ul>
        );
    }