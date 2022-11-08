import { render, screen } from '@testing-library/react';
import { BrowserRouter} from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../i18n';

import AppNavigation from '.';

describe("Should render <AppNavigation/>", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <AppNavigation />
        </I18nextProvider>
      </BrowserRouter>
    );
  })
  it('renders app-navigation', () => {
    expect(screen.getByTestId('app-navigation')).toBeInTheDocument();
  });
});
