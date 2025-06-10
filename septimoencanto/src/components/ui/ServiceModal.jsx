import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

export default function ServiceModal({ show, onHide, service }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState('');
  const [horariosOcupados, setHorariosOcupados] = useState([]);
  const navigate = useNavigate();

  const horarios = [
    '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30',
    '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00'
  ];

  // 🔄 Simulación de fetch de horarios ocupados
  useEffect(() => {
    const fechaStr = selectedDate.toISOString().split('T')[0];
    // Aquí iría el fetch real
    // fetch(`/api/horarios-ocupados?fecha=${fechaStr}`)
    //   .then(res => res.json())
    //   .then(data => setHorariosOcupados(data.ocupados));
    
    // Simulación local (demo)
    const ocupadosDemo = {
      '2025-06-08': ['10:00', '13:00'],
      '2025-06-09': ['11:30', '15:00']
    };
    setHorariosOcupados(ocupadosDemo[fechaStr] || []);
    setSelectedHour('');
  }, [selectedDate]);

  const handleAgendar = () => {
    const fecha = selectedDate.toISOString().split('T')[0];
    navigate(`/agenda?fecha=${fecha}&hora=${selectedHour}`);
  };

  if (!service) return null;

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{service.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={service.image}
          alt={service.title}
          className="img-fluid mb-3 rounded"
        />
        <p>{service.description}</p>

        <div className="mb-3">
          <label className="form-label fw-bold">Selecciona una fecha:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            className="form-control"
            minDate={new Date()}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Selecciona un horario:</label>
          <Form.Select
            value={selectedHour}
            onChange={(e) => setSelectedHour(e.target.value)}
          >
            <option value="">Elige un horario</option>
            {horarios.map((hora) => (
              <option
                key={hora}
                value={hora}
                disabled={horariosOcupados.includes(hora)}
              >
                {hora} {horariosOcupados.includes(hora) ? ' - Ocupado' : ''}
              </option>
            ))}
          </Form.Select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cerrar</Button>
        <Button
          variant="dark"
          onClick={handleAgendar}
          disabled={!selectedHour}
        >
          Agendar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
