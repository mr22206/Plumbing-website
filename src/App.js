import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Devis from './pages/Devis';
import Contact from './pages/Contact';
import Urgences from './pages/Urgences';
import './styles/base/variables.css';
import './styles/base/global.css';
import './styles/App.css';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/urgences" element={<Urgences />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
