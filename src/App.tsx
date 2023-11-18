import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('https://stellar-api.onrender.com/api').then((res) =>
          res.json(),
        )
        setMessage(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {message.map((mess, index) => (
        <p key={index}>{mess}</p>
      ))}
    </div>
  )
}

export default App
