import { useState } from 'react'

import './App.css'
import Products from './Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Pagination</h1>
    <Products/>
    </>
   
  )
}

export default App
