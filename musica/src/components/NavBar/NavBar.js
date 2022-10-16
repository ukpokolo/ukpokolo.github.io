import React from 'react'
import music1 from '../../assets/icons/music1.svg'
import music2 from '../../assets/icons/music2.svg'
import { BsSearch } from 'react-icons/bs';
import './nav.css'

function NavBar() {
  return (
    <nav>
      <div className="nav-top">
        <div className="nav-top-left">
          <div className="burger">
            <div className="line"></div>  
            <div className="line"></div>
          </div> 
          <div className="music-logo">
            <img src={music1} alt="" />
            <img src={music2} alt="" />
          </div>
          </div>
          <div className="search">
            <BsSearch size='1.5rem'/>
          </div>
      </div>
      <div className="nav-left">

      </div>
    </nav>
  )
}

export default NavBar