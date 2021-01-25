import { render, screen } from '@testing-library/react';
import SlideFooter from './SlideFooter';

describe("Should render <SlideFooter/>", () => {
  it('renders footer with credits and link  ', () => {
    render(<SlideFooter/>);

    const title = screen.getByTestId('slide-footer');
    
    expect(title.querySelector('a').href).toBe('https://github.com/lucasferreiralimax/slidecontent-react')
    expect(title.querySelector('a').textContent).toBe('SlideContentReact - @lucasferreiralimax')
  });
});