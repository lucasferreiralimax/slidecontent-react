import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../i18n';

import AppVersion from '.';

describe("Should render <AppVersion/>", () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <AppVersion />
      </I18nextProvider>
    );
  })
  it('renders AppVersion', () => {
    expect(screen.getByTestId('app-version')).toBeInTheDocument();
  });
});
