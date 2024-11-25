import React from 'react';
import '../styles/pages/devis.css';

const Devis = () => {
  return (
    <div className="devis-page">
      <div className="devis-header">
        <h1>Demande de Devis Gratuit</h1>
        <p>Recevez une estimation détaillée pour vos travaux de plomberie</p>
      </div>

      <form className="devis-form">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Nom complet</label>
            <input type="text" id="name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Téléphone</label>
            <input type="tel" id="phone" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="address">Adresse</label>
            <input type="text" id="address" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="service-type">Type de service</label>
          <select id="service-type" className="form-select" required>
            <option value="">Sélectionnez un service</option>
            <option value="plomberie">Plomberie générale</option>
            <option value="chauffage">Chauffage</option>
            <option value="urgence">Intervention urgente</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description des travaux</label>
          <textarea id="description" rows="5" required></textarea>
        </div>

        <div className="form-checkbox-group">
          <label className="form-checkbox-label">
            <input type="checkbox" required />
            <span>J'accepte que mes données soient utilisées pour me recontacter</span>
          </label>
        </div>

        <button type="submit" className="submit-button">
          Demander mon devis gratuit
        </button>
      </form>
    </div>
  );
};

export default Devis;
