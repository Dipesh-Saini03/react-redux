import React, { useState } from 'react';
import './Navbar.css'; // Make sure to create this CSS file
import log from '../images/logo.png'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar container">
    <div className="navbar-brand"><img className='img-fluid' src={log}></img></div>
    <button className="navbar-toggle" onClick={toggleNavbar}>
      &#9776; {/* Hamburger icon */}
    </button>
    <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
      <a href="#home" className="navbar-item">Home</a>
      <a href="#about" className="navbar-item">About</a>
      <a href="#services" className="navbar-item">Services</a>
      <a href="#contact" className="navbar-item">Contact</a>
    </div>
  </nav>
    
         
    
  );
};

export default Header;