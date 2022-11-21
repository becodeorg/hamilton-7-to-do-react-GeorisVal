import React, { useState } from "react";
export default function ToDo(props) {
    let toDo = props.todo;    
    let locStorage = 'toDoApp'
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
        window.localStorage.setItem(locStorage + ".todos", JSON.stringify(toDo))});
    

    return ( 
        <div className="flex flex-col justify-center items-center w-full">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:ml-auto mr-auto gap-10">
                {todos.map((todo) => (
                <li key={todo.id}>
                    <input type="checkbox" id = {todo.id} value={todo.done} onChange={() => {
                        handleChange(todo.id)
                    }} className="accent-blue-300 scale-[3] m-10"></input>
                    <label htmlFor={todo.id} className={`dark:text-white ml-5 text-xl ${todo.done?"line-through":"no-underline"}`}>{todo.title}</label>
                </li>
                ))}
            </ul>
            <div className="flex w-full">
                <button className="bg-blue-500 text-white h-10 m-5 hover:bg-blue-800 rounded-md w-[45%]">Wemove Completed</button> 
                <button className="bg-blue-500 text-white h-10 m-5 hover:bg-blue-800 rounded-md w-[45%]"onClick={
                    () => {
                        if(window.confirm('This will completely remove all the things to do. Are you sure you want to continue ?\nThis action cannot be undone.')) {
                        window.localStorage.removeItem(locStorage + ".todos");
                        window.location.reload(false);
                        }
                }
                }>Wemove All</button>
            </div>
        </div>
    )
}