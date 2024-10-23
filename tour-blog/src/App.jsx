import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='m-5'>
      <Home/>
    </div>
  )
}

export default App
