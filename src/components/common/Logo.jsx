import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/logo.css';

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <div className="logo-circle">
        <span className="logo-text">PCS</span>
      </div>
      <div className="logo-info">
        <span className="company-name">Rezki Benamra</span>
        <span className="company-service">Plomberie</span>
      </div>
    </Link>
  );
};

export default Logo; 