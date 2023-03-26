import Modal from '../components/modal';
import { SUBMISSION_BUTTON_CSS, MESSAGE_MODAL_CSS } from '../shared/css-name';

type AmazingModalBodyProps = {
  text?: string;
  imageUrl?: string;
};

type AmazingModalProps = {
  id?: string;
  isOpen: boolean;
  title?: string;
  classes?: string;
  style?: React.CSSProperties;
  closeButtonText?: string;
  middleButtonText?: string;
  submitButtonText?: string;
  children: React.ReactNode;
  onCloseButtonClick?: React.MouseEventHandler;
  onMiddleButtonClick?: React.MouseEventHandler;
  onSubmitButtonClick?: React.MouseEventHandler;
  isBackIconButton?: boolean;
  isNextIconButton?: boolean;
  isCloseIconButton?: boolean;
  onBackIconButtonClick?: React.MouseEventHandler;
  onNextIconButtonClick?: React.MouseEventHandler;
  onCloseIconButtonClick?: React.MouseEventHandler;
  footerColumns?: number;
  headerHeight?: number;
  footerHeight?: number;
  buttonHeight?: number;
};

type AmazingFloatingIconButtonProps = {
  isDisplay: boolean;
  iconType: 'x' | '<' | '>';
  style: React.CSSProperties;
  onClick?: React.MouseEventHandler;
};

type AmazingFooterButtonProps = {
  isDisplay: boolean;
  text: string;
  style?: React.CSSProperties;
  classes?: string;
  onClick?: React.MouseEventHandler;
};

const AmazingModalBody = ({ text = '', imageUrl = '' }: AmazingModalBodyProps) => {
  return (
    <div className={MESSAGE_MODAL_CSS}>
      {imageUrl && (
        <div className={`${MESSAGE_MODAL_CSS}--icon`}>
          <img src={imageUrl} />
        </div>
      )}
      <div className={`${MESSAGE_MODAL_CSS}--text`}>{text}</div>
    </div>
  );
};

const AmazingFloatingIconButton = ({
  isDisplay = false,
  iconType,
  style,
  onClick,
}: AmazingFloatingIconButtonProps) => {
  if (!isDisplay || !iconType) {
    return null;
  }
  return (
    <Modal.FloatingIconButton
      icon={iconType}
      style={style}
      onClick={(e) => {
        if (typeof onClick === 'function') {
          onClick(e);
        }
      }}
    />
  );
};

const AmazingFooterButton = ({
  isDisplay,
  text,
  classes,
  style,
  onClick,
}: AmazingFooterButtonProps) => {
  if (!isDisplay) {
    return null;
  }
  return (
    <Modal.FooterButton
      classes={classes}
      style={style}
      onClick={(e) => {
        if (typeof onClick === 'function') {
          onClick(e);
        }
      }}
    >
      {text}
    </Modal.FooterButton>
  );
};

/**
 * Aamzing Modal.
 */
const AmazingModal = ({
  id = '',
  isOpen = false,
  classes = '',
  style = {},
  title = '',
  children,
  closeButtonText = '',
  middleButtonText = '',
  submitButtonText = '',
  onCloseButtonClick,
  onMiddleButtonClick,
  onSubmitButtonClick,
  isCloseIconButton = true,
  isBackIconButton = false,
  isNextIconButton = false,
  onBackIconButtonClick,
  onNextIconButtonClick,
  onCloseIconButtonClick,
  footerColumns = 2,
  headerHeight = 40,
  footerHeight = 50,
  buttonHeight = 36,
}: AmazingModalProps) => {
  const isHeader = title !== '';
  const isFooter = closeButtonText !== '' || submitButtonText !== '' || middleButtonText !== '';
  const flatingIconTopMargin = 10 + headerHeight - 40;
  const footerSectionHeight = footerHeight - 20; // Top and bottom padding is total 20px

  return (
    <Modal id={id} isOpen={isOpen} classes={classes} style={style}>
      {isHeader && <Modal.Header style={{ minHeight: `${headerHeight}px` }}>{title}</Modal.Header>}
      <Modal.Body>{children}</Modal.Body>
      {isFooter && (
        <Modal.Footer style={{ minHeight: `${footerSectionHeight}px` }} columns={footerColumns}>
          <AmazingFooterButton
            isDisplay={closeButtonText != ''}
            text={closeButtonText}
            style={{ height: `${buttonHeight}px` }}
            onClick={onCloseButtonClick}
          />
          <AmazingFooterButton
            isDisplay={middleButtonText != ''}
            text={middleButtonText}
            style={{ height: `${buttonHeight}px` }}
            onClick={onMiddleButtonClick}
          />
          <AmazingFooterButton
            isDisplay={submitButtonText != ''}
            text={submitButtonText}
            classes={SUBMISSION_BUTTON_CSS}
            style={{ height: `${buttonHeight}px` }}
            onClick={onSubmitButtonClick}
          />
        </Modal.Footer>
      )}
      <AmazingFloatingIconButton
        iconType="x"
        isDisplay={isCloseIconButton}
        onClick={(e) => {
          if (typeof onCloseIconButtonClick === 'function') {
            onCloseIconButtonClick(e);
            return;
          }
          if (typeof onCloseButtonClick === 'function') {
            onCloseButtonClick(e);
          }
        }}
        style={{ top: `${flatingIconTopMargin}px`, right: '10px' }}
      />
      <AmazingFloatingIconButton
        iconType="<"
        isDisplay={isBackIconButton}
        onClick={onBackIconButtonClick}
        style={{ top: `${flatingIconTopMargin}px`, left: '10px' }}
      />
      <AmazingFloatingIconButton
        iconType=">"
        isDisplay={isNextIconButton}
        onClick={onNextIconButtonClick}
        style={
          isCloseIconButton
            ? isBackIconButton
              ? { top: `${flatingIconTopMargin}px`, left: '40px' }
              : { top: `${flatingIconTopMargin}px`, left: '10px' }
            : { top: `${flatingIconTopMargin}px`, right: '10px' }
        }
      />
    </Modal>
  );
};

export default AmazingModal;
export { AmazingModalBody, AmazingFloatingIconButton, AmazingFooterButton };
