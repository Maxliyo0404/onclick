import "./App.css";
import React, { useState } from 'react'

function App() {
  const [name, setName] = useState("Ahror");
  const handleChange = () =>  {
   setName('Malika')
  }
  return (
    <div className="app">
      <h1>(`Mening ismim ${name}`)</h1>
      <button onClick={handleChange}></button>
    </div>
  )
}

export default App