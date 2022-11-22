import React, { useRef } from "react";

export default function Form(props) {
    const inputRef = useRef();

    function clickHandler() {
        const inputElement = inputRef.current
        if(inputElement.value == '') {
            alert("Come on, I'm sure you've got stuff to do.");
        }else {
            props.addTodo(inputElement.value)
            inputElement.value = '';
        }
    }
    function enterHandler(e) {
        if(e.key === "Enter") {
            const inputElement = inputRef.current
            if(inputElement.value == '') {
                alert("Come on, I'm sure you've got stuff to do.");
            }else {
                props.addTodo(inputElement.value)
                inputElement.value = '';
            }
        }
    }
    return (
        <div className=" w-full flex flex-col justify-center text-center items-center ">
            <input ref={inputRef} type="text" placeholder="What needs to be done ?" className="border border-emerald-900 dark:border-white p-1 pl-2 rounded-md w-11/12" onKeyUp={enterHandler}></input>
            <button className="bg-blue-500 text-white h-10 hover:bg-blue-800 rounded-md w-9/12 mt-5" onClick={clickHandler}>Add task</button>
        </div>
    )
}