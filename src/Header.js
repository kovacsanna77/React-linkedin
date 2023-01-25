import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

export default function 

() {
  return (
    <div className='header'>
      
      <div className='header_left'>
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
              alt=''/>

        <div calssName='header_search'> 
          <SearchIcon />
          <input type="text"/>
        </div>
      </div>

      <div className="header_right">
        
      </div>
    </div>
  )
}
