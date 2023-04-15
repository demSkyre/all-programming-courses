import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar style="position: sticky; top: 0" />
      <Header />
    </div>
    <WhatGPT3 />
    <Brand />
    <Features />
    <Blog />
    <Footer />
  </div>
);

export default App;
