import { render, screen } from '@testing-library/react';
import Language from './Language';
import ermelino from './../assets/ermelino.jpg';

describe("Should render <Language/>", () => {
  it('renders simple item with props', () => {
    render(<Language title="Ermelino Matarazzo" img={ermelino} url="https://github.com/lucasferreiralimax/slidecontent-react" target="_blank" />);

    const title = screen.getByText(/Ermelino Matarazzo/i);
    const link_item = screen.getByTestId('link-item');

    expect(title).toBeInTheDocument()
    expect(link_item).toBeInTheDocument()
    expect(link_item.href).toBe('https://github.com/lucasferreiralimax/slidecontent-react')
    expect(link_item.target).toBe('_blank')
    expect(link_item.querySelector('img').alt).toBe('Ermelino Matarazzo')
  });
});
