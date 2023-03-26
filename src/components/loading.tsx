import {
  LOADING_CSS,
  LOADING_INNER_CSS,
  LOADING_IMAGE_CSS,
  LOADING_TEXT_CSS,
} from '../shared/css-name';

type LoadingProps = {
  isOpen: boolean;
  classes?: string;
  style?: React.CSSProperties;
  text?: string;
  imgSrc?: string;
};

export const loadingStyle = {
  background: '#ffffff',
  opacity: 0.4,
  width: '100%',
  height: '100%',
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 1000,
};

/**
 * Loading Effect.
 *
 * @param prop.isOpen Display loading animation
 * @param prop.classes Custom CSS style class name.
 * @param prop.style Custom CSS style structure, same to the 'style' attribute in React.
 * @param prop.text The text for loading status.
 * @param prop.imgSrc The URL of the image for loading status.
 *
 */
export function Loading({
  isOpen = false,
  classes = '',
  text = '',
  imgSrc = '',
  style = {},
}: LoadingProps) {
  return (
    <div className={`${LOADING_CSS} ${classes}`} style={style} data-is-open={isOpen}>
      <div className={LOADING_INNER_CSS}>
        {imgSrc && (
          <div className={LOADING_IMAGE_CSS}>
            <img src={imgSrc} alt={text} />
          </div>
        )}
        {text && <div className={LOADING_TEXT_CSS}>{text}</div>}
      </div>
    </div>
  );
}
