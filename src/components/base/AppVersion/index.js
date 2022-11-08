import React from 'react';
import { useTranslation } from "react-i18next";
import pkg from '../../../../package.json';

function AppVersion() {
  const appVersion = pkg.version;
  const { t } = useTranslation();

  return <p className='app-version' data-testid='app-version'>{ t('version') } { appVersion }</p>;
}

export default AppVersion;
