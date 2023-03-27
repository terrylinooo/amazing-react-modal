import { FOOTER_CSS } from '../shared/css-name';

type FooterProps = {
  classes?: string;
  style?: React.CSSProperties;
  columns?: number;
  children: React.ReactNode;
};

/**
 * Modal Footer
 *
 * @param prop.classes Custom CSS style class name.
 * @param prop.style Custom CSS style structure, same to the 'style' attribute in React.
 * @param prop.columns The number of column.
 * @param prop.children The header title text, or a children component.
 */
const Footer = ({ classes = '', style = {}, columns = 2, children }: FooterProps) => {
  return (
    <div className={`${FOOTER_CSS} ${classes}`} style={style} data-grid-columns={columns}>
      {children}
    </div>
  );
};

export default Footer;
