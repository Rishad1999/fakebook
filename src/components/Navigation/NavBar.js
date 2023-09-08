import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import "./NavBar.css"

export default function NavBar() {
  return (
    <div className="navBarBox">
        <div className="navBarLeft"></div>
        <img src="/images/6.jpg" alt="" className="logo" />
        <div className="navBarCenter"></div> 
        <div className='searchBarBox'>
            <SearchIcon className='searchIcon'/>
            <input placeholder='Name of the Player' className='searchInput'/>
        </div>
        <div className="navBarRight">
          <div className="navBarLinks">
            <span className='navBarLink'>Matches</span>
            <span className='navBarLink'>Compare Players</span>
          </div>
          <div className="navBarIcons">
            <div className="navBarIcon">
                <PersonIcon/>
                <span className="iconTag">3</span>
            </div>
            <div className="navBarIcon">
                <MessageIcon/>
                <span className="iconTag">5</span>
            </div>
            <div className="navBarIcon">
                <SettingsIcon/>
                <span className="iconTag">2</span>
            </div>
          </div>
          <div className="pic">
            <img src="/images/1.jpeg" alt="" className="profilePicImg" />
          </div>
        </div>

    </div>
  )
}
