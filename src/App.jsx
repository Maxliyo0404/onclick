import "./App.css";
import React, { useState } from 'react'

function App() {
  const [name, setName] = useState("Ahror");
  const handleChange () =>  {
   setName
  }
  return (
    <div className="app"></div>
  )
}

export default App