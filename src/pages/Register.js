import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = () => {
    localStorage.setItem('user', JSON.stringify({ username, password }))
    localStorage.setItem('loggedIn', false)
    navigate('/login')
  }

  return (
   <>
    <Navbar/>
    <div className='register'>
      <h1>Register</h1>
      <input className='username'
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      /> <br />
      <input className='password'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      /><br />
      <button className='regbtn' onClick={handleRegister}>Register</button>
    </div>
   </>
  )
}

export default Register