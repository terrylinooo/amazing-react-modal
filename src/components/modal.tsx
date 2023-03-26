import { createPortal } from 'react-dom';
import { MODAL_CSS, MODAL_INNER_CSS } from '../shared/css-name';
import { FloatingIconButton, FooterButton } from './modal-buttons';
import ModalBody from './modal-body';
import ModalHeader from './modal-header';
import ModalFooter from './modal-footer';

type ModalProps = {
  id?: string;
  isOpen: boolean;
  classes?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

/**
 * Advanced React Modal
 *
 * @param prop.id Custom DOM ID.
 * @param prop.isOpen Display status.
 * @param prop.classes Custom CSS style class name.
 * @param prop.style Custom CSS style structure, same to the 'style' attribute in React.
 * @param prop.children The header title text, or a children component.
 */
const Modal = ({ id = '', isOpen = false, classes = '', style = {}, children }: ModalProps) => {
  const body = document.querySelector('body') as HTMLBodyElement;
  return createPortal(
    <div id={id} className={`${MODAL_CSS} ${classes}`} style={style} data-modal-open={isOpen}>
      <div className={MODAL_INNER_CSS}>{children}</div>
    </div>,
    body,
  );
};

Modal.Body = ModalBody;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.FloatingIconButton = FloatingIconButton;
Modal.FooterButton = FooterButton;

export default Modal;
