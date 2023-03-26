import { useEffect } from 'react';
import { MODAL_CSS } from './css-name';

/**
 * Check the status of all modals and confirm that the scrollbar of the body is
 * at its original value when no modal is open.
 */
export const useDisableBodyScroll = (isOpen: boolean) => {
  useEffect(() => {
    const isAnyModalOpen =
      Array.from(document.querySelectorAll(`.${MODAL_CSS}`)).filter((item) => {
        return item.getAttribute('data-modal-open') === 'true';
      }).length > 0;

    if (isAnyModalOpen) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'unset';
  }, [isOpen]);
};
