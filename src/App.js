import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import './App.css';
import Home from './components/home/Home';
import Landing from './components/compiler/Landing';
import Layout from './components/course_layout/Layout';
import ScrollToTop from './utils/ScrollToTop';

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="landing" element={<Landing/>}/>
        <Route path="course" element={<Layout/>}/>
      </Routes>
    </ScrollToTop>
  </BrowserRouter>
);

export default App;
