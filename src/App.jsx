import "./App.css";
import React, { useState } from 'react'

function App() {
  const [name, setName] = useState("Ahror");
  const handleChange = () =>  {
   if(name === "Ahror"){
     setName
   }
  }
  return (
    <div className="app">
      <h1>Mening ismim {name}</h1>
      <button onClick={handleChange}>send</button>
    </div>
  )
}

export default App