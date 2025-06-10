// src/components/catalog/ProductModal.jsx
import React from 'react';
import { Modal, Button, Badge } from 'react-bootstrap';

export default function ProductModal({ show, onHide, product }) {
  if (!product) return null;

  const hasDiscount = product.discountPercent && product.discountPercent > 0;

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product.image} alt={product.title} className="img-fluid mb-3" />
        <p>{product.description}</p>
        {hasDiscount ? (
          <p>
            <strong>Precio:</strong>{' '}
            <span className="text-danger fw-bold me-2">${product.price.toFixed(2)}</span>
            <small className="text-muted text-decoration-line-through">${product.priceOriginal.toFixed(2)}</small>{' '}
            <Badge bg="danger" className="ms-2">-{product.discountPercent}%</Badge>
          </p>
        ) : (
          <p><strong>Precio:</strong> ${product.price.toFixed(2)}</p>
        )}
        <p><strong>Tipo:</strong> {product.type}</p>
        <p><strong>Color:</strong> {product.color}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="dark"
          href={`https://wa.me/5215645820972?text=Hola! Me interesa este producto: ${product.title}`}
          target="_blank"
        >
          Comprar por WhatsApp
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
