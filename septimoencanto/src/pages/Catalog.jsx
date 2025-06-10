// src/pages/Catalog.jsx (alineando filtros y categorías en una sola barra)
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import products from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import CategoryNav from '../components/catalog/CategoryNav';
import ProductModal from '../components/catalog/ProductModal';
import CombinedFilters from '../components/catalog/CombinedFilters';

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filters, setFilters] = useState({ price: '', minPrice: '', maxPrice: '', type: '', color: '' });
  const [modalProduct, setModalProduct] = useState(null);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filtered = products.filter(p => {
    if (selectedCategory !== 'Todos' && p.category !== selectedCategory) return false;
    if (filters.minPrice && p.price < Number(filters.minPrice)) return false;
    if (filters.maxPrice && p.price > Number(filters.maxPrice)) return false;
    if (filters.type && p.type !== filters.type) return false;
    if (filters.color && p.color !== filters.color) return false;
    return true;
  });

  return (
    <main className="py-5">
      <Container>
        <h1 className="text-center mb-4">Catálogo</h1>
        <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 mb-4">
          <CategoryNav selected={selectedCategory} onChange={setSelectedCategory} />
          <CombinedFilters filters={filters} onChange={handleFilterChange} />
        </div>
        <Row>
          {filtered.map((prod) => (
            <Col key={prod.id} xs={6} md={3} className="mb-4">
              <div onClick={() => setModalProduct(prod)} style={{ cursor: 'pointer' }}>
                <ProductCard {...prod} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <ProductModal
        show={!!modalProduct}
        onHide={() => setModalProduct(null)}
        product={modalProduct}
      />
    </main>
  );
}
