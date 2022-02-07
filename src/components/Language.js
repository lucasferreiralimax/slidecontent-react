import React, { useEffect } from 'react';

import { useTranslation } from "react-i18next";

import brasil from '../assets/flags/pt-BR.svg';
import united from '../assets/flags/en-US.svg';
import spanish from '../assets/flags/es-ES.svg';
import french from '../assets/flags/fr-FR.svg';
import russian from '../assets/flags/ru-RU.svg';
import chine from '../assets/flags/zh-CN.svg';

import './Language.css';
import '../i18n';

function Language() {
  const { i18n } = useTranslation();
  const changeLanguage = ({ target }) => {
    document.querySelectorAll('.language button').forEach((item) => {
      item.classList.remove('actived');
    });
    target.classList.add('actived');
    i18n.changeLanguage(target.textContent);
  };

  useEffect(() => {
    for(let item of document.querySelectorAll('.language button')) {
      if (item.textContent === localStorage.getItem('i18nextLng')) {
        item.classList.add('actived')
      } else {
        item.classList.remove('actived')
      }
    }
  }, []);

  return (
    <section data-testid="language" className="language">
      <button onClick={changeLanguage}>
        <img src={brasil} alt="pt-BR"/>
        pt-BR
      </button>
      <button onClick={changeLanguage}>
        <img src={united} alt="en-US"/>
        en-US
      </button>
      <button onClick={changeLanguage}>
        <img src={spanish} alt="es-ES"/>
        es-ES
      </button>
      <button onClick={changeLanguage}>
        <img src={french} alt="fr-FR"/>
        fr-FR
      </button>
      <button onClick={changeLanguage}>
        <img src={russian} alt="ru-RU"/>
        ru-RU
      </button>
      <button onClick={changeLanguage}>
        <img src={chine} alt="zh-CN"/>
        zh-CN
      </button>
    </section>
  );
}

export default Language;
