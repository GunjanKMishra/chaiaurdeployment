import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [msg, setMsg] = useState("")

  useEffect(() => {
    // fetch("http://localhost:4000/api/msg")
    fetch("http://13.50.250.229:4000/api/msg")
      .then((data) => data.json())
      .then((data) => {
        setMsg(data.msg)
      }).catch((err) => console.error(err.message))
  }, [])
  return (

    <>
      <h1>Welcome to chai and frontend</h1>
      <h2>DATA: {msg}</h2>
    </>
  )
}

export default App
