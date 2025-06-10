// src/components/sections/AboutMe.jsx
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section id="aboutme" className="py-5" style={{ backgroundColor: '#f9f7f4' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.4 }}>
          
        </motion.div>
        <h2 className="text-center mb-4">Sobre Mí</h2>
        <Row className="align-items-center">
          {/* Imagen con animación */}
          <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <Image
                src="/assets/images/aboutme/aboutme.png"
                alt="Sobre mí"
                fluid
                style={{
                  minHeight: '150%',
                  objectFit: 'cover'
                }}
              />
            </motion.div>
          </Col>

          {/* Texto con animación */}
          <Col xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.4 }}
              className="p-3"
            >
              <p className="lead">
                Soy Dulce, la mano y el corazón detrás de <strong>Séptimo Encanto</strong>. Mi pasión por el arte, los detalles y la belleza me llevó a crear un espacio donde cada servicio no solo embellece, sino que también empodera.
              </p>
              <p className="text-muted">
                Aquí no solo se aplican uñas o pestañas, aquí celebramos la belleza con intención, con amor y con magia.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
