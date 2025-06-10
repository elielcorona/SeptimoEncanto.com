// src/components/catalog/FilterDropdowns.jsx
import React from 'react';

export default function FilterDropdowns({ filters, onChange }) {
  return (
    <div className="d-flex gap-3 flex-wrap justify-content-center mb-4">
      <select
        className="form-select form-select-sm"
        value={filters.price}
        onChange={(e) => onChange('price', e.target.value)}
      >
        <option value="">Precio</option>
        <option value="low">Menos de $100</option>
        <option value="mid">$100–$200</option>
        <option value="high">Más de $200</option>
      </select>
      <select
        className="form-select form-select-sm"
        value={filters.type}
        onChange={(e) => onChange('type', e.target.value)}
      >
        <option value="">Tipo</option>
        <option value="Cristales">Cristales</option>
        <option value="Color">Gel Color</option>
        <option value="Pincel">Pinceles</option>
      </select>
      <select
        className="form-select form-select-sm"
        value={filters.color}
        onChange={(e) => onChange('color', e.target.value)}
      >
        <option value="">Color</option>
        <option value="Transparente">Transparente</option>
        <option value="Rojo">Rojo</option>
        <option value="Madera">Madera</option>
      </select>
    </div>
  );
}
