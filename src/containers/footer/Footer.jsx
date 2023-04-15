import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p><b>Universidad Politecnica de Queretaro</b><br/>Carretera Estatal 420 SN, El Marqués Querétaro CP 76240</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Sociales</p>
        <p>Contacto</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Compañia</h4>
        <p>Términos y Condiciones</p>
        <p>Política de Privacidad</p>
        <p>Contacto</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Contactanos</h4>
        <p>Carretera Estatal 420 SN, El Marqués Querétaro CP 76240</p>
        <p>Teléfono: 101 9000</p>
        <p>Correo: recepcion@upq.mx</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>© 2005 | Todos los Derechos Reservados</p>
    </div>
  </div>
);

export default Footer;
