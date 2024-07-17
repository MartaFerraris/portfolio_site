import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.svg'
import Button from '../Button/Button'

const Navbar = () => {

  const redirect = () => window.open('https://linktr.ee/MartaDeveloper', '_blank')

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
      <Button text={"My Contacts"} onClick={redirect}/>

    </div>
  )
}

export default Navbar