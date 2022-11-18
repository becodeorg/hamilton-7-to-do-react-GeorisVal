import React, {useState} from "react";

export default function Checkbox() {
    const initialTodos = ["First thing first", "Second thing second"];
    const [todos, setTodos] = useState(initialTodos)
    return ( 
        <ul>
            {todos.map((todo) => (
                <li key={todo}>
                    <input type="checkbox" className="mr-2" onChange={e => setTodos(e)}></input>
                    <label for="checkbox" className="dark:text-white">{todo}</label>
                </li>
            ))}
        </ul>
        );
    }