import React, {useState} from "react";

export default function ToDO(props) {
    const listToDo = [props.name];
    console.log(props.name);
    const [todos, setTodos] = useState(listToDo);
    return ( 
        <ul className="text-center">
            {todos.map((todo) => (
                <li key={todo} className="border-sky-100">
                    <input type="checkbox" className="mr-2 accent-pink-400" defaultChecked={props.completed} id={props.id}></input>
                    <label htmlFor={props.id} className="dark:text-white">{todo}</label>
                    <div>
                        <button className="mr-5 bg-amber-200 p-1 pl-4 pr-4">
                            Edit <span className="hidden">{props.name}</span>
                        </button>
                        <button className="bg-red-200 p-1 pl-4 pr-4">
                            Delete <span className="hidden">{props.name}</span>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
        );
    }