import React from 'react';

import AppLogo from '../AppLogo';
import AppLanguage from '../AppLanguage';
import AppNavigation from '../AppNavigation';
import AppVersion from '../AppVersion';

function AppHeader() {
  return (
    <header className="app-header" data-testid="app-header">
      <AppLanguage />
      <AppLogo />
      <AppVersion />
      <AppNavigation />
    </header>
  );
}

export default AppHeader;
