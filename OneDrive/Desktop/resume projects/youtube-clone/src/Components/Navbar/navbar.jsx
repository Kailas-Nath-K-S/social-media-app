import './navbar.css'
import React from 'react'
import menuIcon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import  upload from '../../assets/upload.png'
import more from '../../assets/more.png'
import notification from '../../assets/notification.png'
import profileIcon from '../../assets/jack.png'

const Navbar = () => {
  return (
    <nav className='flex-div'>
      <div className="nav-left flex-div">
        <img src={menuIcon} alt="" className="menu-icon" />
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">        <input type="text" placeholder='Search' />
        <img src={search} alt="" className="search-icon" />
</div>
</div>
    <div className="nav-right flex-div">
      <img src={upload} alt="" />
      <img src={more} alt="" />
      <img src={notification} alt="" />
      <img src={profileIcon} alt=""  className='user-icon'/>
    </div>
       </nav>
  )
}

export default Navbar