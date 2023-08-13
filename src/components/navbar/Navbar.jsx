import React from 'react'
import './navbar.css';
import Logo from '../../assets/logo-agp.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <img src={Logo} alt="" />
        <h3>Astro Gems Product</h3>
      </div>
      <div className="right">
      <ul>
      <li className='active-listItem'>Home</li>
      <li className='normal-listItem'>Services</li>
      <li className='normal-listItem'>Products</li>
      <li className='normal-listItem'>About</li>
      <li className='normal-listItem'>Contact</li>
      </ul>
      </div>
     
    </div>
  )
}

export default Navbar
