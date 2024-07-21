import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import logo from '../../assets/logo_full.png';
import cv from '../../assets/Resume_Ankur.pdf';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="navbar">
      <img src={logo} alt="navbar" className='navlogo' />
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <button className="nav-close" onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </button>
        <li>Home</li>
        <li>About Us</li>
        <li>Projects</li>
        <li>Publications</li>
        <li>Contact Me</li>
        <li className="nav-download-container">
        <a href={cv} download="Resume_Ankur.pdf"><div className="nav-download">Download Resume</div></a>
        </li>
      </ul>
      <button className="nav-toggle" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
    </div>
  );
};

export default Navbar;
