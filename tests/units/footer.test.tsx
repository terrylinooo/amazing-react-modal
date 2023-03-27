import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Footer from '../../src/components/footer';
import { FOOTER_CSS } from '../../src/shared/css-name';
import { Button } from '../fixtures/components';

// Tests
describe('Component: Body', async () => {
  //
  it('Test the case where the children prop is a pure text.', async () => {
    render(<Footer>Hello</Footer>);
    const bodyDom = document.querySelector(`.${FOOTER_CSS}`);
    expect(bodyDom).toBeInTheDocument();
    expect(bodyDom?.innerHTML).toBe('Hello');
  });

  it('Test the case where the children prop is a React component.', async () => {
    const bodyDom = render(
      <Footer>
        <Button />
      </Footer>,
    );
    const buttonDom = bodyDom.container.querySelector('#test-button');
    expect(buttonDom).toBeInTheDocument();
  });

  it('Test the properties: classes, style', async () => {
    const classes = 'custom-class example-class';
    const style = {
      padding: '10px',
      fontSize: '13px',
    };

    render(
      <Footer classes={classes} style={style}>
        Test
      </Footer>,
    );

    const dom = document.querySelector('.custom-class');
    expect(dom).toBeInTheDocument();
    expect(dom).toHaveStyle(style);
  });
});
