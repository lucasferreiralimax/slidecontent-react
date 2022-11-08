import React from 'react';
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <section style={{ padding: '2rem' }}>
      <p>{t('about')}</p>
    </section>
  );
}

export default About;
