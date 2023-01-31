import { Avatar } from '@mui/material';
import React from 'react'
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hashtag">#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src='https://i.pinimg.com/564x/ac/33/35/ac33356c8c9881c60362eb23bd10982f.jpg' alt=''/>
            <Avatar className='sidebar__avatar'/>
            <h2>Kovács Anna</h2>
            <h4>anna.kovacs110@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2,345</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on posts</p>
                <p className='sidebar__statNumber'>2,345</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactJs')}
            {recentItem('programming')}
            {recentItem('software engineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>

    </div>
  )
}

export default Sidebar