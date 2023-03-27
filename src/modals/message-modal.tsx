import AmazingModal from './amazing-modal';
import { MESSAGE_MODAL_CSS } from '../shared/css-name';

type MessageBodyProps = {
  text?: string;
  imageUrl?: string;
};

type MessageModalProps = {
  id?: string;
  isOpen: boolean;
  title?: string;
  message?: string;
  imageUrl?: string;
  classes?: string;
  style?: React.CSSProperties;
  closeButtonText?: string;
  submitButtonText?: string;
  onCloseButtonClick?: React.MouseEventHandler;
  onSubmitButtonClick?: React.MouseEventHandler;
  headerHeight?: number;
  footerHeight?: number;
};

const MessageBody = ({ text = '', imageUrl = '' }: MessageBodyProps) => {
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

/**
 * Message Modal is the simplified version of Amazing Modal.
 */
const MessageModal = ({
  id = '',
  isOpen = false,
  classes = '',
  style = {},
  title = '',
  message = '',
  imageUrl = '',
  closeButtonText = '',
  submitButtonText = '',
  onCloseButtonClick,
  onSubmitButtonClick,
  headerHeight = 40,
  footerHeight = 50,
}: MessageModalProps) => {
  return (
    <AmazingModal
      id={id}
      isOpen={isOpen}
      classes={classes}
      style={style}
      title={title}
      closeButtonText={closeButtonText}
      submitButtonText={submitButtonText}
      onCloseButtonClick={onCloseButtonClick}
      onSubmitButtonClick={onSubmitButtonClick}
      headerHeight={headerHeight}
      footerHeight={footerHeight}
    >
      <MessageBody text={message} imageUrl={imageUrl} />
    </AmazingModal>
  );
};

export default MessageModal;
