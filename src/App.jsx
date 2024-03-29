import React, { useState } from 'react'
import { useKonamiCode } from 'use-konami-code';
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

  const [status, setStatus] = useState("all");
  const [filteredTodo, setFilteredTodo] = useState(Todo)
  const filterHandler = () => { 
    switch(status){
      case 'Done':
        setFilteredTodo(Todo.filter(todo => todo.done === true));
        break;
      case 'NotDone':
        setFilteredTodo(Todo.filter(todo => todo.done === false));
        break;
      default:
        setFilteredTodo(Todo)
    }
  }

  const [ message, setMessage ] = useState('');
    useKonamiCode(() => {
        setMessage('You did it!');
    }, () => {
        if(message !== '') {
          alert("Don't be like that...")
        }
        setMessage('');
    });

    const addTodo = (data) => {
      const newTodo = [...filteredTodo]
      newTodo.push({title: data, done: false, id: randomId()})
      setFilteredTodo(newTodo);
    };

    React.useEffect(() => {
      window.localStorage.setItem(locStorage + ".todos", JSON.stringify(Todo));
    },[filteredTodo]);
  return (
    <div className="w-[90vw] md:w-[75vw] min-h-[40vh] flex flex-col justify-start bg-slate-600 border-2 hover:border-purple-500 border-white rounded-xl">
      <Title />
      <div className="mt-5 ml-5 flex justify-center align-center flex-col">
        <Form addTodo={addTodo}/>
        <ToDo todo={filteredTodo}/>
      </div>
    </div>
  )
}
