// src/components/ui/ServiceCard.jsx
import React from 'react';
import { Card } from 'react-bootstrap';

export default function ServiceCard({ id, title, image, description, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <Card className="shadow-sm h-100">
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          style={{ objectFit: 'cover', height: '240px' }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
