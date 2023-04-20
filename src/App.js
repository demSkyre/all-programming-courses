import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import './App.css';
import Home from './components/home/Home';
import Layout from './components/course_layout/Layout';
import Register from './components/register/Register';
import Login from './components/login/Login';
import ScrollToTop from './utils/ScrollToTop';

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="course" element={<Layout/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </ScrollToTop>
  </BrowserRouter>
);

export default App;
