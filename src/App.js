import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import './App.css';

import AppHeader from './components/base/AppHeader';
import AppFooter from './components/base/AppFooter';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
        <AppFooter/>
      </div>
    </Router>
  );
}

export default App;
