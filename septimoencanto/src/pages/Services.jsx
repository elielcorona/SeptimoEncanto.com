// src/pages/Services.jsx
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ui/ServiceCard';
import ServiceModal from '../components/ui/ServiceModal';

export default function ServicesPage() {
  const [modalService, setModalService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Aplicación de Uñas',
      image: '/assets/images/services/3.jpeg',
      description: 'Diseños con gel, acrílico, decoraciones y más. Personaliza tu estilo con detalles únicos y profesionales.'
    },
    {
      id: 2,
      title: 'Aplicación de Pestañas',
      image: '/assets/images/services/2.jpg',
      description: 'Extensiones de pestañas con técnicas personalizadas para un look natural o dramático, tú eliges.'
    }
  ];

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
          <h1 className="text-center mb-4">Nuestros Servicios</h1>
          <p className="text-center text-muted mb-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Servicios pensados para consentirte y hacerte brillar. Elige el que más se ajuste a ti y agenda fácilmente tu cita.
          </p>
        </motion.div>
        <Row>
          {services.map((srv, idx) => (
            <Col key={idx} sm={12} md={6} className="pt-5 mb-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div onClick={() => setModalService(srv)} style={{ cursor: 'pointer' }}>
                  <ServiceCard {...srv} />
                </div>
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
    </main>
  );
}
