import { render, screen } from '@testing-library/react';
import Language from './Language';

describe("Should render <Language/>", () => {
  it('renders simple', () => {
    render(<Language />);

    const language = screen.getByTestId('language');
    expect(language).toBeInTheDocument()
  });
});
