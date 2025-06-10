// src/components/sections/HeroCarousel.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function HeroCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/carrusel/1.png"
          alt="Primera imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/carrusel/2.png"
          alt="Segunda imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/carrusel/3.png"
          alt="Tercera imagen"
        />
      </Carousel.Item>
    </Carousel>
  );
}