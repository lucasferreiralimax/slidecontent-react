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
        <NavLink className="App-logo" to="/">
          <h1>
            {t('title')}
          </h1>
          <img width="100" src={logo} alt="React" />
        </NavLink>
        <nav id="nav">
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false" data-testid="HomeIcon" tabindex="-1" title="HomeIcon"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"  data-testid="MenuBookIcon" tabindex="-1" title="MenuBook"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"></path><path d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zm4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"></path></svg>
            {t('nav.about')}
          </NavLink>
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
