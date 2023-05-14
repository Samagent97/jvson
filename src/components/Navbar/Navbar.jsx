import React from 'react';
import './Navbar.css'






function Navbar() {
  return (
    <nav className='nav'>
    <h1></h1>
    <div className='navitem'>
      <navItem href="#">Home</navItem>
      <navItem href="#">Pricing</navItem>
      <navItem href="#">Contact</navItem>
      <navItem href="#">About Us</navItem>
    </div>
  </nav>
  )
}

export default Navbar;