import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h4>Menu</h4>
          <ul>
            <li><a href="google.com">Inicio</a></li>
            <li><a href="google.com">Nosotros</a></li>
            <li><a href="google.com">Servicios</a></li>
            <li><a href="google.com">Productos</a></li>
            <li><a href="google.com">Recomendaciones</a></li>
            <li><a href="google.com">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contacto</h4>
          <div className="contact-card">
            <div className="contact-info">
              <i className="fa fa-phone"></i>
              <p>+1 234 5678</p>
            </div>
            <div className="contact-info">
              <i className="fa fa-envelope"></i>
              <p>info@example.com</p>
            </div>
            <div className="contact-info">
              <i className="fa fa-map-marker"></i>
              <p>123 Main St, City, Country</p>
            </div>
            <div className="contact-info">
              <i className="fa fa-clock"></i>
              <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h4>Formulario de Contacto</h4>
          <form className="contact-form">
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Correo electrónico" />
            <textarea placeholder="Mensaje"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <div className='footer-copy'>
        <p className="footer-copy-p">&#169; 2023 - Todos los derechos reservados - Creado y Diseñado por Digital Code</p>
      </div>
    </footer>
  );
};

export default Footer;
