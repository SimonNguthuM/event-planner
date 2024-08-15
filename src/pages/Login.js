import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'))
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      localStorage.setItem('loggedIn', true);
      navigate('/');
    } else {
      setMessage('Invalid username or password. Please register or try again.')
    }
  }

  return (
    <>
    <Navbar/>
    <div className='login'>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      {message && <p>{message}</p>}
      <p>Not registered? <a href="/register">Register here</a></p>
    </div>
    </>
  )
}

export default Login