import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.svg'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const redirect = () => window.open('https://linktr.ee/MartaDeveloper', '_blank')

  return (
    <div className='navbar'>
      <img className='nav-logo' src={logo} alt="" />
      <ul className="nav-menu">
        <li className='nav-link'><Link to="/">Home</Link></li>
        <li className='nav-link'><Link to="aboutMe">About Me</Link></li>
        <li className='nav-link'><Link to="/services">Services</Link></li>
        <li className='nav-link'><Link to="/portfolio">Portfolio</Link></li>
        <li className='nav-link'><Link to="/contacts">Contacts</Link></li>
      </ul>
      <Button text={"My Contacts"} onClick={redirect}/>
    </div>
  )
}

export default Navbar