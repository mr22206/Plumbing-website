import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <h1 className="hero-title">PCS Plomberie</h1>
        <p className="hero-subtitle">Services professionnels de plomberie disponibles 24/7</p>
        <div className="cta-buttons">
          <Link to="/devis" className="cta-button">Demander un devis</Link>
          <Link to="/urgences" className="cta-button secondary">Urgence 24/7</Link>
        </div>
      </section>

      <section className="services-section">
        <div className="services-header">
          <h1>Nos Services</h1>
          <p>Des solutions professionnelles pour tous vos besoins en plomberie</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <h3>Plomberie Générale</h3>
            <p>Installation et réparation de tous systèmes de plomberie</p>
          </div>
          <div className="service-card">
            <h3>Chauffage</h3>
            <p>Installation et maintenance de systèmes de chauffage</p>
          </div>
          <div className="service-card">
            <h3>Urgences</h3>
            <p>Intervention rapide pour tous problèmes urgents</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
