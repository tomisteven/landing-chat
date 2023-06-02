import React, {useEffect, useRef} from 'react';
import './SecondSeccion.css';
import i1 from '../instalacion1.jpg';
import i2 from '../instalacion2.jpg';

const SecondSection = () => {
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
      <section id='about' className="second-section" ref={sectionRef}>
        <div className="second-content">
          <div className="second-text-container">
            <h2 className="second-title">Sobre Nosotros</h2>
            <h3 className="second-subtitle">Conoce nuestra historia</h3>
            <p className="second-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend tellus vitae ante rhoncus iaculis.
              Nulla rhoncus leo urna, sed venenatis felis ultrices nec. Sed non condimentum felis, in viverra lorem.
            </p>
          </div>
          <div className="second-image-container">
            <img src={i1} alt="Instalación 1" className="second-image" />
            <img src={i2} alt="Instalación 2" className="second-image" />
          </div>
        </div>
      </section>
    );
  }

  export default SecondSection;