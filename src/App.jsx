import React, { useState } from 'react'
import { v4 as randomId } from "uuid";
import Title from './components/title'
import Form from './components/form'
import ToDo from './components/todo'
import './App.css'

let locStorage = 'toDoApp'

export default function App() {
  let initialTodo = [];
    const [Todo, setTodo] = useState(() => {
      initialTodo = JSON.parse(localStorage.getItem(locStorage + ".todos"));
      return initialTodo || []
  });

    const addTodo = (data) => {
      const newTodo = [...Todo]
      newTodo.push({title: data, done: false, id: randomId()})
      setTodo(newTodo);
    };

    React.useEffect(() => {
      window.localStorage.setItem(locStorage + ".todos", JSON.stringify(Todo));
    },[Todo]);
  return (
    <div className="-screen w-screen flex flex-col justify-start dark:bg-slate-600">
      <Title />
      <div className="mt-5 ml-5 flex justify-center align-center flex-col">
        <Form addTodo={addTodo}/>
        <ToDo todo={Todo}/>
      </div>
    </div>
  )
}
