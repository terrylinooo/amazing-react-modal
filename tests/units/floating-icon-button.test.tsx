import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { FloatingIconButton } from '../../src/components/buttons';
import { FLOATING_ICON_BODY_CSS } from '../../src/shared/css-name';
import userEvent from '@testing-library/user-event';

// Tests
describe('Component: FooterButton', async () => {
  //
  it('Test the properties: classes, style, icon', async () => {
    const classes = 'custom-class example-class';
    const style = {
      padding: '10px',
      fontSize: '13px',
    };

    render(<FloatingIconButton classes={classes} style={style} icon={'x'} />);

    const dom = document.querySelector('.custom-class');
    expect(dom).toBeInTheDocument();
    expect(dom).toHaveStyle(style);

    const icon = document.querySelector(`.${FLOATING_ICON_BODY_CSS}`);
    expect(icon?.getAttribute('data-advrm-icon')).toBe('x');
  });

  it('Test the onClick prop', async () => {
    let isButtonClicked = false;

    const handleOnClick = () => {
      isButtonClicked = true;
    };

    render(<FloatingIconButton classes={'custom-class'} icon="<" onClick={handleOnClick} />);

    const user = userEvent.setup();
    const dom = document.querySelector('.custom-class');
    await user.click(dom as HTMLButtonElement);
    expect(isButtonClicked).toBe(true);
  });
});
