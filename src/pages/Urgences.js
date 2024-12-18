import React from 'react';
import '../styles/pages/urgences.css';

const Urgences = () => {
  return (
    <div className="urgences-page">
      <div className="urgences-header">
        <h1>Services d'Urgence</h1>
        <p>Intervention rapide 24/7 pour tous vos problèmes de plomberie</p>
      </div>
      <div className="urgence-info">
        <h2>24/7 Disponible</h2>
        <p>Pour toutes urgences, appelez-nous au :</p>
        <h3>01 23 45 67 89</h3>
        <p>Nous intervenons dans les plus brefs délais pour :</p>
        <ul>
          <li>Fuites d'eau</li>
          <li>Débouchage urgent</li>
          <li>Pannes de chauffage</li>
        </ul>
      </div>
    </div>
  );
};

export default Urgences;
