import React from 'react';
import { useTranslation } from "react-i18next";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  NavLink
} from "react-router-dom";

import './App.css';
import logo from './assets/logo.svg';

import Language from './components/Language';
import Home from './pages/Home';
import About from './pages/About';
import SlideFooter from './components/SlideFooter';

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <div className="app">
        <Language />
        <h1>{t('title')}</h1>
        <img width="200" src={logo} className="App-logo" alt="React" />
        <nav id="nav">
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>{t('nav.home')}</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>{t('nav.about')}</NavLink>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
        <SlideFooter/>
      </div>
    </Router>
  );
}

export default App;
