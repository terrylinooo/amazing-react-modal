import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Body from '../../src/components/body';
import { BODY_CSS } from '../../src/shared/css-name';
import { Form } from '../fixtures/components';

// Tests
describe('Component: Body', async () => {
  //
  it('Test the case where the children prop is a pure text.', async () => {
    render(<Body>Hello</Body>);
    const bodyDom = document.querySelector(`.${BODY_CSS}`);
    expect(bodyDom).toBeInTheDocument();
    expect(bodyDom?.innerHTML).toBe('Hello');
  });

  it('Test the case where the children prop is a React component.', async () => {
    const bodyDom = render(
      <Body>
        <Form />
      </Body>,
    );
    const formDom = bodyDom.container.querySelector('#form');
    expect(formDom).toBeInTheDocument();
  });

  it('Test the properties: classes, style', async () => {
    const classes = 'custom-class example-class';
    const style = {
      padding: '10px',
      fontSize: '13px',
    };

    render(
      <Body classes={classes} style={style}>
        Test
      </Body>,
    );

    const dom = document.querySelector('.custom-class');
    expect(dom).toBeInTheDocument();
    expect(dom).toHaveStyle(style);
  });
});
