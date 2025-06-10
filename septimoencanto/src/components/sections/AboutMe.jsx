// src/components/sections/AboutMe.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function AboutMe() {
  return (
    <section
      className="py-5"
      style={{
        backgroundImage: `url('/assets/images/aboutme/aboutme.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center left',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}></Col> {/* Imagen del lado izquierdo */}
          <Col md={6} className="text-start text-md-start">
            <h2 className="fw-bold mb-3">Sobre Mí</h2>
            <p className="lead" style={{ maxWidth: '500px' }}>
              Soy Dulce, la mano y el corazón detrás de Séptimo Encanto. Mi pasión por el arte, los detalles y la belleza me llevó a crear un espacio donde cada servicio no solo embellece, sino que también empodera.
              Creo firmemente que el cuidado personal es una forma de amor propio, y cada clienta que pasa por mis manos se convierte en parte de esta historia.
            </p>
            <p className="text-muted" style={{ maxWidth: '500px' }}>
              Aquí no solo se aplican uñas o pestañas, aquí celebramos la belleza con intención, con amor y con magia.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
