// src/components/ui/ProductCard.jsx
import React from 'react';
import { Card, Badge } from 'react-bootstrap';

export default function ProductCard({ title, image, description, link, price, priceOriginal, discountPercent, onClick }) {
  const hasDiscount = discountPercent && discountPercent > 0;

  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <Card className="h-100 shadow-sm border-0 position-relative">
        {hasDiscount && (
          <Badge bg="danger" className="position-absolute top-0 start-0 m-2">
            -{discountPercent}%
          </Badge>
        )}
        <Card.Img variant="top" src={image} alt={title} className="img-fluid p-3" style={{ height: '220px', objectFit: 'contain' }} />
        <Card.Body>
          <Card.Title className="fs-6 mb-1 text-truncate">{title}</Card.Title>
          <Card.Text className="text-muted small mb-2">{description}</Card.Text>
          {hasDiscount ? (
            <Card.Text>
              <span className="text-danger fw-bold me-2">${price.toFixed(2)}</span>
              <small className="text-muted text-decoration-line-through">${priceOriginal.toFixed(2)}</small>
            </Card.Text>
          ) : (
            <Card.Text className="fw-bold">${price.toFixed(2)}</Card.Text>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
