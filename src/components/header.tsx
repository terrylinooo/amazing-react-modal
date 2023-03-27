import { HEADER_CSS, HEADER_TITLE_CSS } from '../shared/css-name';

type HeaderProps = {
  classes?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

/**
 * Modal Header
 *
 * @param prop.classes Custom CSS style class name.
 * @param prop.style Custom CSS style structure, same to the 'style' attribute in React.
 * @param prop.children The header title text, or a children component.
 */
function Header({ classes = '', style = {}, children }: HeaderProps) {
  return (
    <div className={`${HEADER_CSS} ${classes}`} style={style}>
      <div className={HEADER_TITLE_CSS}>{children}</div>
    </div>
  );
}

export default Header;
