import { useState } from 'react'
import Title from './components/title'
import Form from './components/form'
import ToDo from './components/todo'
import './App.css'
import * as ReactDOM from 'react-dom';

function App() {
  return (
    <div className="-screen w-screen flex flex-col justify-start dark:bg-slate-600">
      <Title />
      <div className="mt-5 ml-5 flex justify-center align-center flex-col">
        <Form />
        <ToDo />
      </div>
    </div>
  )
}
export default App
