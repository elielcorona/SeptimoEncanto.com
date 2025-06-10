// src/components/catalog/CombinedFilters.jsx (Dropdown integrado con categorías)
import React from 'react';
import { Dropdown, DropdownButton, Form } from 'react-bootstrap';
import { Funnel } from 'react-bootstrap-icons';

export default function CombinedFilters({ filters, onChange }) {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 mb-4 px-2">
      <DropdownButton
        id="dropdown-filtros"
        title={<><Funnel className="me-2" />Filtrar</>}
        variant="outline-dark"
        size="sm"
      >
        <div className="px-3 py-2" style={{ minWidth: '250px' }}>
          <Form.Group controlId="filtroPrecioMin">
            <Form.Label className="mb-1">Precio mínimo</Form.Label>
            <Form.Control
              type="number"
              placeholder="$ Min"
              min={0}
              value={filters.minPrice || ''}
              onChange={(e) => onChange('minPrice', e.target.value)}
              className="mb-2"
            />
          </Form.Group>
          <Form.Group controlId="filtroPrecioMax">
            <Form.Label className="mb-1">Precio máximo</Form.Label>
            <Form.Control
              type="number"
              placeholder="$ Max"
              min={0}
              value={filters.maxPrice || ''}
              onChange={(e) => onChange('maxPrice', e.target.value)}
              className="mb-2"
            />
          </Form.Group>
          <Form.Group controlId="filtroTipo">
            <Form.Label className="mb-1">Tipo</Form.Label>
            <Form.Select
              value={filters.type}
              onChange={(e) => onChange('type', e.target.value)}
              className="mb-2"
            >
              <option value="">Todos</option>
              <option value="Cristales">Cristales</option>
              <option value="Color">Gel Color</option>
              <option value="Pincel">Pinceles</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="filtroColor">
            <Form.Label className="mb-1">Color</Form.Label>
            <Form.Select
              value={filters.color}
              onChange={(e) => onChange('color', e.target.value)}
            >
              <option value="">Todos</option>
              <option value="Transparente">Transparente</option>
              <option value="Rojo">Rojo</option>
              <option value="Madera">Madera</option>
            </Form.Select>
          </Form.Group>
        </div>
      </DropdownButton>
    </div>
  );
}
