import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem('loggedIn') === 'true'
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    onLogout()
    navigate('/')
  };

  return (
    <nav className='navbar'>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      {loggedIn ? (
        <>
          <span className='username'>{user.username}</span>
          <button className='logout' onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button className="login-button" onClick={handleLoginClick}>🙎‍♂️User Login</button>
      )}
    </nav>
  )
}

export default Navbar