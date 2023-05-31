import React, {useEffect} from 'react';
import './FirstSection.css';

const FirstSection = () => {
    useEffect(() => {
        const title = document.querySelector('.title-f');
        const subtitle = document.querySelector('.subtitle');
        const startButton = document.querySelector('.start-button');

        title.classList.add('animate-left');
        subtitle.classList.add('animate-left');
        startButton.classList.add('animate-left');

        return () => {
          title.classList.remove('animate-left');
          subtitle.classList.remove('animate-left');
          startButton.classList.remove('animate-left');
        };
      }, []);



  return (
    <section className="first-section">
      <div className="content">
        <h1 className="title-f">Título de la primera sección</h1>
        <h2 className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eveniet vero? Ea tempora expedita ipsa. Molestias, doloribus animi iste ipsa impedit aliquid maxime error officiis! Consequuntur nulla doloribus quo dolorem?</h2>
        <button className="start-button">Comenzar</button>
      </div>
    </section>
  );
}

export default FirstSection;
