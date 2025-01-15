import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img 
          src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa0fdd7266e1c9f1a269b675c3038f885.cdn.bubble.io%2Ff1718898602448x184545947964404700%2FIcon%2520Transparent%2520Dark%2520-%2520Final.png" 
          alt="Logo" 
          className="logo"
        />
      </div>
      <div className="navbar-right">
        <div className="nav-link">ABOUT US</div>
      </div>
    </div>
  )
}

export default Navbar 