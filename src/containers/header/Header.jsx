import React from 'react';
import circuitcircle from '../../assets/circuitcircle.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="inicio">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Bienvenido a Cursos sobre todo Programación</h1>
      <p>El portal de conocimiento es una plataforma para el aprendizaje de diversos lenguajes de programación a través de cursos gratuitos por parte de la institución.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Correo Institucional" />
        <button type="button">Iniciar</button>
      </div>
      <div className="gpt3__header-content__people">
        <p><a href="#home"><u>Olvidé mi contraseña</u></a></p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={circuitcircle} />
    </div>
  </div>
);

export default Header;
