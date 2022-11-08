import { render, screen } from '@testing-library/react';
import AppVersion from '.';

describe("Should render <AppVersion/>", () => {
  it('renders appVersion', () => {
    render(<AppVersion/>);
    expect(screen.getByTestId('app-version')).toBeInTheDocument();
  });
});
