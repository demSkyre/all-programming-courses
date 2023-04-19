import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><Link to="#inicio">Inicio</Link></p>
          <p><Link to="#info">Información</Link></p>
          <p><Link to="#curriculo">Currículo</Link></p>
          <p><Link to="#cursos">Cursos</Link></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Ingresar</p>
        <button type="button">Registrarse</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><Link to="#inicio">Inicio</Link></p>
            <p><Link to="#info">Información</Link></p>
            <p><Link to="#curriculo">Currículo</Link></p>
            <p><Link to="#cursos">Cursos</Link></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Ingresar</p>
            <button type="button">Registrarse</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
