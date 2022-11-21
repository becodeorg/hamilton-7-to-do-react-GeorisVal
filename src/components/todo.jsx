import React, { useState } from "react";
export default function ToDo(props) {
    let toDo = props.todo;    

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

    React.useEffect(() => {
        setTodos(props.todo);
    })

    return ( 
        <ul className="grid grid-cols-2 ml-auto mr-auto gap-10">
            {todos.map((todo) => (
            <li key={todo.id}>
                <input type="checkbox" id = {todo.id} value={todo.done} onChange={() => {
                    handleChange(todo.id)
                }} className="accent-blue-300 scale-[3] m-10"></input>
                <label htmlFor={todo.id} className={`dark:text-white ml-5 text-xl ${todo.done?"line-through":"no-underline"}`}>{todo.title}</label>
            </li>
            ))}
        </ul>
    )
}