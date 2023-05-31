import React, { useEffect, useRef } from 'react';
import './ThirdSection.css';


import image1 from '../service2.jpg';
import image2 from '../service 3.jpg';
import image3 from '../service1.jpg';

const ThirdSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElement = sectionRef.current;

      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
          sectionElement.classList.add('animate');
        } else {
          sectionElement.classList.remove('animate');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamamos a la función para verificar el estado inicial
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="third-section" ref={sectionRef}>
<h2 className="title-tree">Nuestros Servicios</h2>
      <div className="container">
        <div className="image-container">
          <img src={image1} alt="Imagen 1" className="image" />
          <div className="overlay">
            <h3 className="subtitle">Subtítulo de la imagen 1</h3>
          </div>
        </div>
        <div className="image-container">
          <img src={image2} alt="Imagen 2" className="image" />
          <div className="overlay">
            <h3 className="subtitle">Subtítulo de la imagen 2</h3>
          </div>
        </div>
        <div className="image-container">
          <img src={image3} alt="Imagen 3" className="image" />
          <div className="overlay">
            <h3 className="subtitle">Subtítulo de la imagen 3</h3>
          </div>
        </div>
        <div className="image-container">
          <img src={image1} alt="Imagen 3" className="image" />
          <div className="overlay">
            <h3 className="subtitle">Subtítulo de la imagen 3</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
