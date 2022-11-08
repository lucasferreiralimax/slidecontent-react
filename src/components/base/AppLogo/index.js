import React from 'react';
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import './style.css';
import logo from '../../../assets/logo.svg';

function AppLogo() {
  const { t } = useTranslation();
  return (
    <NavLink className="App-logo" to="/">
      <h1>
        {t('title')}
      </h1>
      <img width="100" src={logo} alt="React" />
    </NavLink>
  );
}

export default AppLogo;
