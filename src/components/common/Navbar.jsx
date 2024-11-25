import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../../styles/components/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-container">
        <Logo />
        
        <button 
          className="nav-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/devis" className="nav-link">Devis</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/urgences" className="nav-link emergency">Urgences 24/7</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 