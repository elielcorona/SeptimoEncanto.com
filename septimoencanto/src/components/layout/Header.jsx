// src/components/layout/Header.jsx
import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/theme.css';

export default function Header() {
  return (
    <header>
      <Navbar expand="lg" sticky="top" className="bg-light shadow-sm px-3">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              src="/assets/images/logos/logo_septimoencanto.png"
              alt="Séptimo Encanto"
              width="130"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="mx-auto text-center">
              <Nav.Link as={Link} to="/">INICIO</Nav.Link>
              <Nav.Link as={Link} to="/catalogo">CATÁLOGO</Nav.Link>
              <Nav.Link as={Link} to="/servicios">SERVICIOS</Nav.Link>
              <Nav.Link href="#aboutme">SOBRE MÍ</Nav.Link>
            </Nav>
            <div className="d-none d-lg-block">
              <Button
                as={Link}
                to="/agenda"
                variant="outline-dark"
                className="rounded-pill agenda-btn"
              >
                Agendar Cita
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}