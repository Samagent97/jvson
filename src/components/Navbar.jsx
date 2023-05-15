import React from 'react'
import './styles/Navbar.css'
import Logo from './../assets/logo.png'
const Navbar = () => {
  return (
    <div className='navbar container'>
        <div className="navbarLogo">
            <img src={Logo} alt="logo" className='navbarLogoImg'/>
        </div>
        <div className="navbarLinks">
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>FAQs</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar