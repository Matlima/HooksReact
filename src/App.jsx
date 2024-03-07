import { useState } from 'react'

import { Outlet, Link } from "react-router-dom";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
      <Outlet />
      
    </div>
  )
}

export default App
