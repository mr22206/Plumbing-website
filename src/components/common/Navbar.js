import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import '../../styles/components/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="navbar">        
      <div className="navbar-container">
        <Logo />
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => handleNavigation('/')}>Accueil</Link>
        <Link to="/services" onClick={() => handleNavigation('/services')}>Services</Link>
        <Link to="/devis" onClick={() => handleNavigation('/devis')}>Devis</Link>
        <Link to="/contact" onClick={() => handleNavigation('/contact')}>Contact</Link>
        <Link to="/urgences" onClick={() => handleNavigation('/urgences')} className="urgence-link">
          Urgence 24/7
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 