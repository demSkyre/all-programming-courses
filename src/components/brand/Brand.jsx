import React from 'react';
import { javascript, html, css, csharp, sqlserver } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={javascript} />
    </div>
    <div>
      <img src={html} />
    </div>
    <div>
      <img src={css} />
    </div>
    <div>
      <img src={csharp} />
    </div>
    <div>
      <img src={sqlserver} />
    </div>
  </div>
);

export default Brand;
