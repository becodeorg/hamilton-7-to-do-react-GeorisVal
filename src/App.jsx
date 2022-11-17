import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


const title = <h1 class="text-2xl dark:text-white">My To-Do List</h1>
const inputText = <input type="text" placeholder="What needs to be done ?" class="border border-emerald-900 dark:border-white p-1 pl-2"></input>
const button = <button class="bg-blue-500 text-white w-52 h-10 m-5 hover:bg-blue-800">Add task</button>
const checkbox = <input type="checkbox" class="mr-2"></input>;
const label =  <label for="checkbox" class="dark:text-white">CB</label>

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div class="-screen w-screen flex flex-col justify-start dark:bg-slate-600">
      <header class="h-20 bg-slate-100 dark:bg-slate-900 border-b-2 flex items-center justify-center">
        {title}
      </header>
      <div class="mt-5 ml-5">
        {inputText}<br />
        {button}<br />
        {checkbox} {label}
      </div>
    </div>
  )
}

export default App
