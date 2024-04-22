import { useState } from 'react'
import axios from 'axios'
import './App.css'
import Animes from './component/Animes.jsx'
import { useEffect } from 'react'

function Home() {
  const [animes, setAnimes] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchAnimes = async () => {
    try {
      const response = await axios.get('http://localhost:8003/animes')
      setAnimes(response.data)
    }
    catch (err) {
      setError(err)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAnimes()
  }, [])

  if (error) return <p>{error.message}</p>
  if (loading) return <p>Loading...</p>



  return (
    <>
      <h1>Welcome to my Anime App</h1>



      <div>
        <Animes data={animes} />

      </div>

    </>
  )
}

export default Home
