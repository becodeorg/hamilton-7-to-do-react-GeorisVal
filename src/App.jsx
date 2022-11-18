import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Title from './components/title'
import Button from './components/button'
import InputText from './components/inputText'
import CheckBox from './components/checkbox'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div class="-screen w-screen flex flex-col justify-start dark:bg-slate-600">
      <Title />
      <div class="mt-5 ml-5">
        <InputText /><br />
        <Button /><br />
        <CheckBox />
        <CheckBox />
        <CheckBox />
      </div>
    </div>
  )
}

export default App
