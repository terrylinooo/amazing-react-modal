import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { FooterButton } from '../../src/components/buttons';
import { FOOTER_BUTTON_CSS, LOADING_CSS } from '../../src/shared/css-name';
import { Span } from '../fixtures/components';
import userEvent from '@testing-library/user-event';

// Tests
describe('Component: FooterButton', async () => {
  //
  it('Test the case where the children prop is a pure text.', async () => {
    render(<FooterButton>Hello</FooterButton>);
    const dom = document.querySelector(`.${FOOTER_BUTTON_CSS}`);
    expect(dom).toBeInTheDocument();
    expect(dom?.innerHTML).toBe('Hello');
  });

  it('Test the case where the children prop is a React component.', async () => {
    const buttonDom = render(
      <FooterButton>
        <Span />
      </FooterButton>,
    );
    const dom = buttonDom.container.querySelector('#test-span');
    expect(dom).toBeInTheDocument();
  });

  it('Test the properties: classes, style', async () => {
    const classes = 'custom-class example-class';
    const style = {
      padding: '10px',
      fontSize: '13px',
    };

    render(
      <FooterButton classes={classes} style={style}>
        Test
      </FooterButton>,
    );

    const dom = document.querySelector('.custom-class');
    expect(dom).toBeInTheDocument();
    expect(dom).toHaveStyle(style);
  });

  it('Test the onClick prop.', async () => {
    let isButtonClicked = false;

    const handleOnClick = () => {
      isButtonClicked = true;
    };

    render(<FooterButton onClick={handleOnClick}>Test</FooterButton>);

    const dom = document.querySelector(`.${FOOTER_BUTTON_CSS}`);
    const user = userEvent.setup();
    await user.click(dom as HTMLElement);
    expect(isButtonClicked).toBe(true);
  });

  it('Test the isDisabled prop.', async () => {
    render(<FooterButton isDisabled={true}>Test</FooterButton>);

    const dom = document.querySelector(`.${FOOTER_BUTTON_CSS}`) as HTMLButtonElement;
    expect(dom.disabled).toBe(true);
  });

  it('Test the isLoading prop.', async () => {
    render(<FooterButton isLoading={false}>Test</FooterButton>);

    const dom = document.querySelector(`.${LOADING_CSS}`) as HTMLElement;
    expect(dom).toBe(null);

    render(<FooterButton isLoading={true}>Test</FooterButton>);

    const dom2 = document.querySelector(`.${LOADING_CSS}`) as HTMLElement;
    expect(dom2).toBeInTheDocument();
  });
});
