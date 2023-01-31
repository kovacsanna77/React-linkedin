import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
      
      <div className='header__left'>
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
              alt=""/>

        <div className='header__search'> 
          <SearchIcon />
          <input type="text"/>
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My network"/>
        <HeaderOption Icon={BusinessCenterIcon} title ="Jobs"/>
        <HeaderOption Icon={ChatIcon} title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOption avatar="https://i.pinimg.com/564x/30/49/18/3049189dcb0ef853ffbcb13627356a3f.jpg" title="Me"/>
      </div>
    </div>
  )
}
export default Header;