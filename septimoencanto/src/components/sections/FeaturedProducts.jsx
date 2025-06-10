import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../ui/ProductCard';
import ProductModal from '../catalog/ProductModal';
import products from '../../data/products';
import { motion } from 'framer-motion';

export default function FeaturedProducts() {
  const [modalProduct, setModalProduct] = useState(null);

  const featured = products.filter(p => p.featured);
  const promos = products.filter(p => p.promo);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-5">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-center mb-4">Favoritos de la Comunidad</h2>
          <p className="text-center text-muted mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Nuestros productos más populares y recomendados por clientas. Perfectos para elevar tus diseños y destacar en cada aplicación.
          </p>
        </motion.div>

        <Row>
          {featured.map((prod, idx) => (
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

        {promos.length > 0 && (
          <>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h3 className="text-center mt-5 mb-4">Promociones Activas</h3>
            </motion.div>

            <Row>
              {promos.map((prod, idx) => (
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
          </>
        )}

        <ProductModal
          show={!!modalProduct}
          onHide={() => setModalProduct(null)}
          product={modalProduct}
        />
      </Container>
    </section>
  );
}
