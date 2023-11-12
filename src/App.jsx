import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar/NavBar'
import Main from './Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='sm:px-20 font-[Inter] w-full'>
      <NavBar />
      <Main />
    </div>
  )
}

export default App
