import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import ExpertView from './components/ExpertView/ExpertView';
import RateExpert from './components/RateExpert/RateExpert';
import Survey from './components/Survey/Survey';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />} exact path='/' />
      <Route element={<Login />} exact path='/login' />
      <Route element={<ExpertView />} path='/expert' />
      <Route element={<RateExpert />} path='/rate' />
      <Route element={<Survey />} path='/survey' />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
