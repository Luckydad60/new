import React, { useState } from 'react'
import logo from "../logo/logoh.png";
import { Link } from 'react-router-dom';
import TickerTape from '../utils/TickerTape';

function Header({ setOpen }) {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)
  }
  return (<>
    <header>
  <TickerTape /> 
      <div className="page-header">
        <div className="logo">
          <img src={logo} alt='Logo' />
        </div>
        <a id="menu-icon" className="menu-icon" onClick={handleClick}>
          <i className="fa fa-bars"></i>
        </a>
        <div id="navigation-bar" className={click ? "nav-bar responsive" : "nav-bar"}>
          <a href="#" className="active">Home</a>
          <a href="#service">Services</a>
          <a href="#explore">Explore</a>
        </div>
        <div className="header-right"><Link className='header-btn' onClick={() => setOpen(true)}>Connect</Link></div>
      </div>
    </header>
    </>
  )
}

export default Header