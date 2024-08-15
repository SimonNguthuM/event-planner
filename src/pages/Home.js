import React, { useState, useEffect } from 'react'
import Events from '../components/Events'
import Navbar from '../components/Navbar'

function Home() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true')

  useEffect(() => {
    const handleStorageChange = () => {
      setLoggedIn(localStorage.getItem('loggedIn') === 'true')
    }

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('loggedIn')
    localStorage.removeItem('user')
    setLoggedIn(false)
  }

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <Events loggedIn={loggedIn} />
    </div>
  )
}

export default Home