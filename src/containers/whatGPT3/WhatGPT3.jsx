import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="info">
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">¿Cómo funciona nuestro sistema de enseñanza?</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Descripciones" text="Damos una breve explicación de lo que se busca lograr, y cómo se busca lograr." />
      <Feature title="Ejemplos" text="Proporcionamos ejemplos claros de cómo se puede realizar diferentes soluciones a los problemas que fueron establecidos." />
      <Feature title="Pruebas" text="Realizamos diferentes actividades basadas en el tema del curso para que el usuario puera poner a prueba los conocimientos adquiridos." />
    </div>
  </div>
);

export default WhatGPT3;
