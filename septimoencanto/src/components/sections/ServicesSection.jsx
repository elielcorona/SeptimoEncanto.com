// src/components/sections/ServicesSection.jsx
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServiceCard from '../ui/ServiceCard';
import ServiceModal from '../ui/ServiceModal'; // asegúrate que esté bien la ruta
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const [modalService, setModalService] = useState(null);

  const services = [
    {
      id: 'unas',
      title: 'Aplicación de Uñas',
      image: '/assets/images/services/3.jpeg',
      description: 'Diseños con gel, acrílico, decoraciones y más.',
    },
    {
      id: 'pestanas',
      title: 'Aplicación de Pestañas',
      image: '/assets/images/services/2.jpg',
      description: 'Extensiones con técnicas personalizadas.',
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-5">
      <Container>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-center mb-4">Servicios</h2>
        </motion.div>

        <Row>
          {services.map((srv, idx) => (
            <Col key={idx} sm={12} md={6} className="pt-5 mb-4">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <ServiceCard {...srv} onClick={() => setModalService(srv)} />
              </motion.div>
            </Col>
          ))}
        </Row>

        <ServiceModal
          show={!!modalService}
          onHide={() => setModalService(null)}
          service={modalService}
        />
      </Container>
    </section>
  );
}
