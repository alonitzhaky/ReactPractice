import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Color from './components/Color';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Regtext" element={<h1>Not Found</h1>} />
          <Route path="/Colorchange" element={<Color />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);