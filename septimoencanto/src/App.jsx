// src/App.jsx (actualizado con nueva ruta)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Services from './pages/Services';
import Agenda from './pages/Agenda';
import './styles/theme.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/agenda" element={<Agenda />} />
        {/* Puedes agregar más rutas aquí según sea necesario */}

      </Routes>
    </Router>
  );
}