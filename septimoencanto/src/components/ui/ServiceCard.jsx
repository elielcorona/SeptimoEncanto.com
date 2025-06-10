// src/components/ui/ServiceCard.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ServiceCard({ title, image, description, link }) {
  return (
    <Link to={link} className="text-decoration-none">
      <Card className="shadow-sm h-100">
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}