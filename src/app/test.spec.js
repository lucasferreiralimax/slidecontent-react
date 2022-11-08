import { render, screen } from '@testing-library/react';
import App from '.';

describe("Should render <App/>", () => {
  it('renders titles', () => {
    render(<App />);
    const titles = screen.getAllByText(/SlideContentReact/i);
    const slideInfinity = screen.getByText(/slide_infinity/i);
    const slideNavEmpty = screen.getByText(/slide_no_navigation/i);
    const slideTime = screen.getByText(/slide_fix_time/i);

    for(let title of titles) {
      expect(title.textContent).toContain('SlideContentReact');
    }

    expect(slideInfinity).toBeInTheDocument()
    expect(slideNavEmpty).toBeInTheDocument()
    expect(slideTime).toBeInTheDocument()
  });

  it('renders app-footer', () => {
    render(<App />);
    expect(screen.getByTestId('app-footer')).toBeInTheDocument();
  });
});
