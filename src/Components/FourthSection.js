import React, { useEffect, useRef } from 'react';
import './FourthSection.css';

import image1 from '../producto1.jpg';
import image2 from '../producto 2.jpg';
import image3 from '../producto3.jpg';


const FourthSection = () => {
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
    <section className="fourth-section" ref={sectionRef}>
      <div className="container">
        <div className='cont-title-four'>
          <h2 className="title-four">Descubre Nuestros Productos</h2>
          <p className="description-four">Lorem ipsum dolor sit amet, consectetur adipiscing elit
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor N. del T. persona que se dedica a la imprenta desconocido usó una galería de textos.</p>

        </div>
        <div className="product-list">
          <div className="product">
            <img src={image1} alt="Product 1" />
            <h3 className="product-title">Producto 1</h3>
            <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href='google.com' className="product-link">Ver más</a>
          </div>
          <div className="product">
            <img src={image2} alt="Product 2" />
            <h3 className="product-title">Producto 2</h3>
            <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="google.com" className="product-link">Ver más</a>
          </div>
          <div className="product">
            <img src={image3} alt="Product 3" />
            <h3 className="product-title">Producto 3</h3>
            <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="google.com" className="product-link">Ver más</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
