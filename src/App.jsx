import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import { AuthContext } from '../Context'
import AppNav from './AppNav'

function App() {
  const [count, setCount] = useState(0)

  return (
      <AppNav/>

  )
}

export default App
