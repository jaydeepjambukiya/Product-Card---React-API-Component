import { useState } from 'react'
import Prodact from './Components/Product'
import './App.css'
// import Header from './Components/Header'
// import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Prodact />
    </>
  )
}

export default App
