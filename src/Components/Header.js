import React from 'react';
import './Header.css';
import logo from '../DIGITAL_CODE__1_-removebg-preview.png';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
      <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">Nosotros</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">Servicios</a>
          </li>
          <li className="nav-item">
            <a href="#products" className="nav-link">Productos</a>
          </li>
          <li className="nav-item">
            <a href="#recommendations" className="nav-link">Recomendaciones</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
