import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/services.css';

const Services = () => {
  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Nos Services de Plomberie</h1>
        <p>Des solutions professionnelles pour tous vos besoins en plomberie</p>
      </div>

      <div className="services-container">
        <div className="service-card">
          <i className="fas fa-wrench service-icon"></i>
          <h2>Plomberie Générale</h2>
          <p>Installation, réparation et maintenance de tous systèmes de plomberie</p>
          <ul>
            <li>Réparation de fuites</li>
            <li>Installation sanitaire</li>
            <li>Débouchage canalisations</li>
          </ul>
          <Link to="/devis" className="service-cta">Demander un devis</Link>
        </div>

        <div className="service-card">
          <i className="fas fa-fire service-icon"></i>
          <h2>Chauffage</h2>
          <p>Installation et entretien de systèmes de chauffage</p>
          <ul>
            <li>Chaudières gaz/fioul</li>
            <li>Pompes à chaleur</li>
            <li>Radiateurs</li>
          </ul>
          <Link to="/devis" className="service-cta">Demander un devis</Link>
        </div>

        <div className="service-card">
          <i className="fas fa-bolt service-icon"></i>
          <h2>Dépannage Urgent</h2>
          <p>Service d'urgence disponible 24h/24 et 7j/7</p>
          <ul>
            <li>Fuites importantes</li>
            <li>Débouchages urgents</li>
            <li>Pannes de chauffage</li>
          </ul>
          <Link to="/urgences" className="service-cta urgent">Appeler maintenant</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
