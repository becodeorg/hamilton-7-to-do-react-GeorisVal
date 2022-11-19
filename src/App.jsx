import { useState } from 'react'
import Title from './components/title'
import Button from './components/button'
import InputText from './components/inputText'
import ToDo from './components/todo'
import './App.css'
import * as ReactDOM from 'react-dom';

function App() {
  return (
    <div className="-screen w-screen flex flex-col justify-start dark:bg-slate-600">
      <Title />
      <div className="mt-5 ml-5 flex justify-center flex-col">
        <InputText /><br />
        <Button /><br />
        <ToDo name="First test" completed={true} id="todo-0"/>
        <ToDo name="Second test" completed={false} id="todo-1"/>
      </div>
    </div>
  )
}
console.log(tasks)
export default App
