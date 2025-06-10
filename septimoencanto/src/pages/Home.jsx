// src/pages/Home.jsx
import React from 'react';
import HeroCarousel from '../components/sections/HeroCarousel';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import ServicesSection from '../components/sections/ServicesSection';
import FloatingButton from '../components/layout/FloatingButton';
import AboutMe from '../components/sections/AboutMe';

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <FeaturedProducts />
      <AboutMe />
      <ServicesSection />
      <FloatingButton />
    </main>
  );
}