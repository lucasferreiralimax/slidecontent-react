import { render, screen } from '@testing-library/react';
import App from './App';

describe("Should render <App/>", () => {
  it('renders titles', () => {
    render(<App />);
    const titles = screen.getAllByText(/SlideContentReact/i);
    const slideInfinity = screen.getByText(/Slide infinito/i);
    const slideNavEmpty = screen.getByText(/Slide sem navegação/i);
    const slideTime = screen.getByText(/Slide com duração de 10 segundos/i);

    for(let title of titles) {
      expect(title.textContent).toContain('SlideContentReact');
    }

    expect(slideInfinity).toBeInTheDocument()
    expect(slideNavEmpty).toBeInTheDocument()
    expect(slideTime).toBeInTheDocument()
  });

  it('renders slide-footer', () => {
    render(<App />);
    expect(screen.getByTestId('slide-footer')).toBeInTheDocument();
  });
});