import { FOOTER_CSS } from '../shared/css-name';

type ModalFooterProps = {
  classes?: string;
  columns?: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

/**
 * Modal Footer
 *
 * @param prop.classes Custom CSS style class name.
 * @param prop.columns
 * @param prop.style Custom CSS style structure, same to the 'style' attribute in React.
 * @param prop.children The header title text, or a children component.
 */
const ModalFooter = ({ classes = '', columns = 2, style = {}, children }: ModalFooterProps) => {
  return (
    <div className={`${FOOTER_CSS} ${classes}`} style={style} data-grid-columns={columns}>
      {children}
    </div>
  );
};

export default ModalFooter;
