import React from 'react'
import '../css/Header.css'

const Header = () => {
  return (
    <div className='header-container'>
        <div className="user-name">
            <span>Hello Evano 👋,</span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder='Search...' />
        </div>
    </div>
  )
}

export default Header