import React from "react";

import '../../App.css';

import { Footer, Blog, Features, WhatGPT3, Header } from '../../containers';
import { Brand, Navbar } from '..';


const Home = () => {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <WhatGPT3 />
        <Brand />
        <Features />
        <Blog />
        <Footer />
      </div>
    </>
  );
};
export default Home;