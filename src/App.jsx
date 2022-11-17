import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const title = <h1 class="text-2xl">My To-Do List</h1>
const inputText = <input type="text" placeholder="What needs to be done ?" class="border border-emerald-900 p-1 pl-2"></input>
const button = <button class="bg-blue-500 text-white w-52 h-10 m-5">Add task</button>
const checkbox = (`${<input type="checkbox" class="mr-2"></input>}
${<label for="checkbox">CB</label>}`);

function App() {

  return (
    <div class="h-screen w-screen flex flex-col justify-start">
      <header class="h-20 bg-slate-100 border-b-2 flex items-center justify-center">
        {title}
      </header>
      <div class="mt-5 ml-5">
        {inputText}<br />
        {button}<br />
        {checkbox}
      </div>
    </div>
  )
}

export default App
