import { BODY_CSS } from '../shared/css-name';

type BodyProps = {
  classes?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

/**
 * Modal Body
 *
 * @param prop.classes Custom CSS style class name.
 * @param prop.children Body content.
 */
function Body({ classes = '', style = {}, children }: BodyProps) {
  return (
    <div className={`${BODY_CSS} ${classes}`} style={style}>
      {children}
    </div>
  );
}

export default Body;
