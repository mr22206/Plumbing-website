import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>PCS Plomberie</h3>
          <p>Services professionnels de plomberie</p>
          <p>Disponible 24/7 pour les urgences</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Nos Services</h3>
          <ul>
            <li><Link to="/services">Plomberie générale</Link></li>
            <li><Link to="/services">Chauffage</Link></li>
            <li><Link to="/services">Dépannage urgent</Link></li>
            <li><Link to="/devis">Devis gratuit</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <p><i className="fas fa-phone"></i> 01 23 45 67 89</p>
          <p><i className="fas fa-envelope"></i> contact@pcs-plomberie.fr</p>
          <p><i className="fas fa-map-marker-alt"></i> 123 rue de la Plomberie, Paris</p>
        </div>
        
        <div className="footer-section">
          <h3>Horaires</h3>
          <p>Lundi - Vendredi: 8h - 18h</p>
          <p>Samedi: 9h - 16h</p>
          <p className="emergency">Urgences: 24/7</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 PCS Plomberie - Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
