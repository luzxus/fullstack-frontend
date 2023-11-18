import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './vite.svg' // Assuming that vite.svg is in the same directory
import './App.css'

function App() {
  const [message, setMessage] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('http://localhost:3000/api').then((res) =>
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
