import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'JavaScript',
    text: 'Un lenguaje de secuencias de comandos que permite crear contenido que se actualiza dinamicamente, controlar multimedia, animar imágenes, etc.',
  },
  {
    title: 'HTML',
    text: 'El lenguaje de marcado que utilizamos para estructurar y dar significado a nuestro contenido web, por ejemplo; definir párrafos, encabezados y tablas de datos, o incrustar imágenes y videos en la página.',
  },
  {
    title: 'CSS',
    text: 'Lenguaje de reglas de estilo que se utiliza para aplicar estilo a nuestro contenido HTML, por ejemplo; establecer colores de fondo y fuentes, y distribuir nuestro contenido en varias columnas.',
  },
  {
    title: 'C#',
    text: 'C# es un Lenguaje de programación orientado a objetos de Microsoft que permite a los desarrolladores crear aplicaciones que se ejecutan en la plataforma .NET. C# tiene sus raíces en la familia C de lenguajes de programación y comparte muchas de las características que se encuentran en C y C++, así como en Java y JavaScript.',
  },
  {
    title: 'SQL',
    text: 'Es el lenguaje de consulta estructurado. SQL se utiliza para comunicarse con una base de datos. Este es el lenguaje estándar para los sistemas de gestión de bases de datos relacionales. Las declaraciones SQL se utilizan para realizar tareas como actualizar datos en una base de datos o recuperar datos de una base de datos.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Información sobre los cursos que se van a brindar y aquellos que se planean para futuros proyectos.</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
