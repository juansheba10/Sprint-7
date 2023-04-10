import React from 'react';
import { BrowserRouter as Router, Route, Link, Outlet, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Bienvenida from './Bienvenida';
import Calculadora from './Calculadora';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Bienvenida</Link>
            </li>
            <li>
              <Link to="/calculadora">Calculadora</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Bienvenida />} />
          <Route path="/calculadora" element={<Calculadora />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
