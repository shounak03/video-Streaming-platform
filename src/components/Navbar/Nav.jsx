import React from 'react'
import './nav.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/final-logo-3.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import profile_icon from '../../assets/jack.png'
import noti_icon from '../../assets/notification.png'
import { Link } from 'react-router-dom';



const Nav = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img src={menu_icon} alt="" className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} />
        <Link to='/'> <img src={logo} alt=""  className="logo" /> </Link>
        
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={noti_icon} alt="" />

      </div>

      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search"/>
        <button className="search-button">
          <svg className="search-icon" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </button>
      </div>
      <div className="flex-div">
      <img src={profile_icon} className="user-icon" alt="" />
      </div>

    </nav>
  )
}

export default Nav