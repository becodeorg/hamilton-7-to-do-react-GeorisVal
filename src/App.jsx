import { useState } from 'react'
import Title from './components/title'
import Button from './components/button'
import InputText from './components/inputText'
import ToDo from './components/todo'
import './App.css'
import * as ReactDOM from 'react-dom';

function App(props) {
  const taskList = props.tasks.map((task) => <ToDo />);
  console.log(taskList)
  return (
    <div className="-screen w-screen flex flex-col justify-start dark:bg-slate-600">
      <Title />
      <div className="mt-5 ml-5 flex justify-center flex-col">
        <InputText /><br />
        <Button /><br />
      </div>
    </div>
  )
  console.log(props.tasks)
}
export default App
