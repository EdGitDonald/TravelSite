import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate()

  return (
    <div className='header-container'>
        <h1 onClick={() =>{navigate(`/`)}}>Best Travels</h1>
        <input type='text' placeholder='Search Destination'/>
        <nav className='nav-container'>
            <p>Your Favourites</p>
            <p>Sign In</p>
        </nav>

    </div>
  )
}

export default Header