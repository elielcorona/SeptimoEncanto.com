// src/pages/Catalog.jsx
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import products from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import CategoryNav from '../components/catalog/CategoryNav';
import ProductModal from '../components/catalog/ProductModal';
import CombinedFilters from '../components/catalog/CombinedFilters';
import { motion } from 'framer-motion';

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

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="py-5">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1 className="text-center mb-4">Catálogo</h1>
        </motion.div>

        <motion.div
          className="d-flex flex-wrap align-items-center justify-content-center gap-3 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <CategoryNav selected={selectedCategory} onChange={setSelectedCategory} />
          <CombinedFilters filters={filters} onChange={handleFilterChange} />
        </motion.div>

        <Row>
          {filtered.map((prod) => (
            <Col key={prod.id} xs={12} md={6} lg={3} className="pt-5 mb-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                onClick={() => setModalProduct(prod)}
                style={{ cursor: 'pointer' }}
              >
                <ProductCard {...prod} />
              </motion.div>
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
