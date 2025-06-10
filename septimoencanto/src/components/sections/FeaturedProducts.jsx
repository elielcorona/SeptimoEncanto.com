// src/components/sections/FeaturedProducts.jsx (para impulsar productos especiales)
import React from 'react';
import { Container, Badge } from 'react-bootstrap';
import ProductCard from '../ui/ProductCard';
import products from '../../data/products';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function FeaturedProducts() {
  const featured = products.filter(p => p.featured);
  const promos = products.filter(p => p.promo);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4">Favoritos de la Comunidad</h2>
        <p className="text-center text-muted mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Nuestros productos más populares y recomendados por clientas. Perfectos para elevar tus diseños y destacar en cada aplicación.
        </p>
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={4000} keyBoardControl>
          {featured.map((prod) => (
            <div key={prod.id} className="px-2">
              <ProductCard
                title={prod.title}
                image={prod.image}
                description={prod.description}
                price={prod.price}
                priceOriginal={prod.priceOriginal}
                discountPercent={prod.discountPercent}
              />
            </div>
          ))}
        </Carousel>

        {promos.length > 0 && (
          <>
            <h3 className="text-center mt-5 mb-4">Promociones Activas</h3>
            <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={4500} keyBoardControl>
              {promos.map((prod) => (
                <div key={prod.id} className="position-relative px-2">
                  {prod.discountPercent && (
                    <Badge bg="danger" className="position-absolute top-0 start-0 m-2">
                      -{prod.discountPercent}%
                    </Badge>
                  )}
                  <ProductCard
                    title={prod.title}
                    image={prod.image}
                    description={prod.description}
                    price={prod.price}
                    priceOriginal={prod.priceOriginal}
                    discountPercent={prod.discountPercent}
                  />
                </div>
              ))}
            </Carousel>
          </>
        )}
      </Container>
    </section>
  );
}
