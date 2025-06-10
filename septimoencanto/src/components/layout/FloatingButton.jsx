// src/components/layout/FloatingButton.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function FloatingButton() {
  return (
    <Link
      to="/agenda"
      className="position-fixed d-lg-none"
      style={{
        bottom: '20px',
        right: '20px',
        zIndex: 1050,
        backgroundColor: '#1D4035',
        color: '#fff',
        border: 'none',
        width: '52px',
        height: '52px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        boxShadow: '2px 2px 8px rgba(0,0,0,0.2)',
        textDecoration: 'none'
      }}
    >
      <i className="bi bi-calendar" />
    </Link>
  );
}
