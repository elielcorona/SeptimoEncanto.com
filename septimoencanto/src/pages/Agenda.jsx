// src/pages/Agenda.jsx
import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import services from '../data/services';

export default function Agenda() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const initialServiceId = params.get('servicio');
  const initialDate = params.get('fecha');
  const initialHour = params.get('hora');

  const [selectedService, setSelectedService] = useState(
    services.find((s) => s.id === initialServiceId) || null
  );
  const [date, setDate] = useState(initialDate ? new Date(initialDate) : null);
  const [hour, setHour] = useState(initialHour || '');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const availableHours = ['10:00', '11:00', '12:00', '13:00', '16:00', '17:00'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Aquí irá lógica backend
  };

  return (
    <Container className="py-5" id="agenda-form">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-center mb-4">Agendar Cita</h1>
        <p className="text-center text-muted mb-4" style={{ maxWidth: 600, margin: '0 auto' }}>
          {selectedService
            ? `Estás por agendar una cita para: ${selectedService.title}`
            : 'Selecciona el servicio, fecha y horario para continuar con tu cita.'}
        </p>
      </motion.div>

      <Form onSubmit={handleSubmit}>
        <Row className="g-4 justify-content-center">

          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Servicio</Form.Label>
              <Form.Select
                value={selectedService?.id || ''}
                onChange={(e) => {
                  const srv = services.find(s => s.id === e.target.value);
                  setSelectedService(srv);
                }}
                required
              >
                <option value="">Selecciona un servicio</option>
                {services.map((srv) => (
                  <option key={srv.id} value={srv.id}>{srv.title}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Fecha</Form.Label>
              <DatePicker
                selected={date}
                onChange={setDate}
                className="form-control"
                placeholderText="Selecciona una fecha"
                minDate={new Date()}
                required
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Horario</Form.Label>
              <Form.Select value={hour} onChange={(e) => setHour(e.target.value)} required>
                <option value="">Selecciona un horario</option>
                {availableHours.map((h) => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                placeholder="55..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group>
              <Form.Label>Notas adicionales</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col xs={12} className="text-center">
            <Button type="submit" variant="dark" className="px-5 rounded-pill">
              Confirmar Cita
            </Button>
          </Col>
        </Row>
      </Form>

      {submitted && (
        <Alert variant="success" className="mt-5 text-center">
          Tu cita ha sido registrada con éxito. Pronto recibirás una confirmación por WhatsApp.
        </Alert>
      )}
    </Container>
  );
}
