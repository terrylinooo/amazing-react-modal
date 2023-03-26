import { BODY_CSS } from '../shared/css-name';

type ModalBodyProps = {
  classes?: string;
  children: React.ReactNode;
};

/**
 * Modal Body
 *
 * @param prop.classes Custom CSS style class name.
 * @param prop.children Body content.
 */
function ModalBody({ classes = '', children }: ModalBodyProps) {
  return <div className={`${BODY_CSS} ${classes}`}>{children}</div>;
}

export default ModalBody;
