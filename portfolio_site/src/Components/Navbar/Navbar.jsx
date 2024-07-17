import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='nav-logo' src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect" onClick={() => window.open('https://linktr.ee/MartaDeveloper', '_blank')}>
        My contacts
      </div>

    </div>
  )
}

export default Navbar