import React, { useState } from 'react';
import './Navbar.css';
import logo_light from '../pages/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div className='navbar'>
      <button className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <img src={logo_light} alt="Logo" className='logo' />
      
      <ul className={isMenuOpen ? 'active' : ''}>
      <a href="/"><li>Home</li></a>
      <a href="/Initiatives"><li>Initiatives</li></a>
      <a href="/blog"><li>Blogs</li></a>
      <a href="/AboutUs"><li>About Us</li></a>
      <a href="/MeetTheTeam"><li>The Team</li></a>
      <a href="/mes"><li>MES</li></a>
      <a href="/SSP"><li>SSP</li></a>
      </ul>
    </div>
  );
}

export default Navbar;
