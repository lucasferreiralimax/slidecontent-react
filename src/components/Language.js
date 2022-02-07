import React, { useEffect } from 'react';

import { useTranslation } from "react-i18next";

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
      <button onClick={changeLanguage}>pt-BR</button>
      <button onClick={changeLanguage}>en-US</button>
      <button onClick={changeLanguage}>es-ES</button>
      <button onClick={changeLanguage}>fr-FR</button>
      <button onClick={changeLanguage}>ru-RU</button>
      <button onClick={changeLanguage}>zh-CN</button>
    </section>
  );
}

export default Language;
