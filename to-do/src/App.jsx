import { useState } from 'react'
import './App.css'
import Ingreso from './Ingreso'
import Impresion from "./Impresion";
import UseFetch from './UseFetch';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <UseFetch/>
    </>
    
  )
}

export default App
