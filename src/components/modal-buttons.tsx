import { FOOTER_BUTTON_CSS, FLOATING_ICON_BUTTON_CSS } from '../shared/css-name';
import { Loading } from './loading';

type ModalFooterButtonProps = {
  classes?: string;
  style?: React.CSSProperties;
  type?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
};

type ModalIconButtonProps = {
  classes?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
  icon: 'x' | '<' | '>';
};

/**
 * Footer button
 *
 * @param prop.classes Custom CSS style class name.
 * @param prop.style Custom CSS style structure, same to the 'style' attribute in React.
 * @param prop.isDisabled Close button
 * @param prop.isLoading Display loading animation
 * @param prop.children Button text
 * @param prop.onClick Handle the click of the confirmation button.
 */
export function FooterButton({
  classes = '',
  style = {},
  isDisabled = false,
  isLoading = false,
  children,
  onClick,
}: ModalFooterButtonProps) {
  return (
    <button
      type="button"
      className={`${FOOTER_BUTTON_CSS} ${classes}`}
      style={style}
      disabled={isDisabled || isLoading}
      onClick={(e) => {
        if (typeof onClick === 'function') {
          onClick(e);
        }
      }}
    >
      {isLoading ? <Loading isOpen={isLoading} /> : children}
    </button>
  );
}

/**
 * Floating icon buttons are Located in the header.
 *
 * Display the '<' symbol button: back
 * Display the '>' symbol button: back
 * Display the 'x' symbol button: close
 *
 * @param prop.classes Custom CSS style class name.
 * @param prop.style Custom CSS style structure, same to the 'style' attribute in React.
 * @param prop.icon The icon type, available options: '<', '>', 'x'
 * @param prop.onClick Handle the click of the confirmation button.
 */
export function FloatingIconButton({
  classes = '',
  style = {},
  onClick,
  icon,
}: ModalIconButtonProps) {
  return (
    <button
      type="button"
      className={`${FLOATING_ICON_BUTTON_CSS} ${classes}`}
      style={style}
      onClick={(e) => {
        if (typeof onClick === 'function') {
          onClick(e);
        }
      }}
    >
      <span className="icon-body" data-advrm-icon={icon}></span>
    </button>
  );
}
