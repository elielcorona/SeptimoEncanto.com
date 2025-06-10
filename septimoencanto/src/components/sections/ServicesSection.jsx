// src/components/sections/ServicesSection.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServiceCard from '../ui/ServiceCard';

export default function ServicesSection() {
  const services = [
    {
      title: 'Aplicación de Uñas',
      image: '/assets/images/services/3.jpeg',
      description: 'Diseños con gel, acrílico, decoraciones y más. Personaliza tu estilo con detalles únicos y profesionales.',
      link: '/servicios'
    },
    {
      title: 'Aplicación de Pestañas',
      image: '/assets/images/services/2.jpg',
      description: 'Extensiones de pestañas con técnicas personalizadas para un look natural o dramático, tú eliges.',
      link: '/servicios'
    }
  ];

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4">Servicios</h2>
        <Row>
          {services.map((srv, idx) => (
            <Col key={idx} sm={12} md={6} className="mb-4">
              <ServiceCard {...srv} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
