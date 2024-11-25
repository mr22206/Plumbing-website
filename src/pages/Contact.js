import React from 'react';
import '../styles/pages/contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contactez-nous</h1>
        <p>Nous sommes à votre écoute pour tous vos besoins en plomberie</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <h3>Téléphone</h3>
            <p>01 23 45 67 89</p>
            <p className="subtitle">Disponible 24/7 pour les urgences</p>
          </div>
          
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>contact@pcs-plomberie.fr</p>
            <p className="subtitle">Réponse sous 24h</p>
          </div>
          
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Adresse</h3>
            <p>123 rue de la Plomberie</p>
            <p>75000 Paris</p>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom complet</label>
            <input type="text" id="name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Téléphone</label>
            <input type="tel" id="phone" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" required></textarea>
          </div>
          
          <button type="submit" className="submit-button">
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
