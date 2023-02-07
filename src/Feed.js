import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import './Feed.css'
import InputOption from './InputOption';
import Post from './Post'

function Feed() {
  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
              <CreateIcon/>
              <form>
                  <input type='text'></input>
                  <button type='submit'>Send</button>

              </form>
            </div>
            <div className="feed__inputOptions">
              <InputOption Icon={ImageIcon} title="Photo" color ="#70B5F9"/>
              <InputOption Icon={YouTubeIcon} title="Video" color='#e7a33e'/>
              <InputOption Icon={EventIcon} title="Event" color='#c0cbcd'/>
              <InputOption Icon={NewspaperIcon} title="Write article" color='#7fc15e'/>
            </div>
        </div>

{/*Post section */}
    <Post name='Anna Kovács' description='this is a test' message='Wow this worked' />
    </div>
  )
}

export default Feed