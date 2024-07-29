import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-scroll';
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
        <li>
          <Link to="hero" smooth={true} duration={500} onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About Us</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link>
        </li>
        <li>
          <Link to="publications" smooth={true} duration={500} onClick={toggleMenu}>Publications</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact Me</Link>
        </li>
        <li className="nav-download-container">
          <a href={cv} download="Resume_Ankur.pdf">
            <div className="nav-download">Download Resume</div>
          </a>
        </li>
      </ul>
      <button className="nav-toggle" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
    </div>
  );
};

export default Navbar;
