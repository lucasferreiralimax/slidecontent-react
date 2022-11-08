import { render, screen } from '@testing-library/react';
import AppFooter from '.';

import pkg from '../../../../package.json';

describe("Should render <AppFooter/>", () => {
  it('renders footer with credits and link', () => {
    render(<AppFooter/>);

    const title = screen.getByTestId('app-footer');

    expect(title.querySelector('a').href).toBe('https://github.com/lucasferreiralimax/slidecontent-react')
    expect(title.querySelector('a').textContent).toBe(`version ${pkg.version}SlideContentReact@lucasferreiralimax`)
  });
});
