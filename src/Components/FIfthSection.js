import React, { useEffect, useRef, useState } from 'react';
import './FifthSection.css';
import img1 from '../marca1.png';
import img2 from '../marca2.png';
import img3 from '../marca 3.png';
import img4 from '../marca4.png';
import img5 from '../marca5.png';
import img6 from '../marca6.png';

const FifthSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  const brands = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];

  useEffect(() => {
    const carouselElement = carouselRef.current;

    const startCarousel = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
      }, 3000);
    };

    const stopCarousel = () => {
      clearInterval(intervalRef.current);
    };

    carouselElement.addEventListener('mouseenter', stopCarousel);
    carouselElement.addEventListener('mouseleave', startCarousel);

    startCarousel();

    return () => {
      clearInterval(intervalRef.current);
      carouselElement.removeEventListener('mouseenter', stopCarousel);
      carouselElement.removeEventListener('mouseleave', startCarousel);
    };
  }, [brands.length]);

  return (
    <section className="fifth-section">
      <div className="carousel" ref={carouselRef}>
        <h2 className='title-marcas'>Nuestras Marcas mas Reconocidas</h2>
        <div className="slide-wrapper">
          {brands.map((brand, index) => (
            <div
              className={`slide ${index === currentIndex ? 'active' : ''}`}
              key={index}
            >
              <img src={brand} alt={`Brand ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
