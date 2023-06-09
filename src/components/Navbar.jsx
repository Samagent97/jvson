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
                <li>Get started</li>
                <li>How it works</li>
                <li>Pricing</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar