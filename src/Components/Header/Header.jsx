import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
        <h1>Best Travels</h1>
        <input type='text' placeholder='Search Destination'/>
        <nav className='nav-container'>
            <p>Your Favourites</p>
            <p>Sign In</p>
        </nav>

    </div>
  )
}

export default Header