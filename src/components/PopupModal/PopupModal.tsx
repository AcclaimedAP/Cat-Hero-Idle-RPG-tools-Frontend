import { MouseEventHandler, ReactNode } from "react";
import './popupModal.css';

/**
 * The popup modal component
 * @param {ReactNode} children - The children of the popup modal
 * @param {Boolean} isOpen - The state of the popup modal
 * @param {MouseEventHandler} onClose - The function to close the popup modal
 * @returns {JSX.Element} The popup modal component
 */

export const PopupModal = ({ children, isOpen, onClose }: { children: ReactNode, isOpen: Boolean, onClose: MouseEventHandler }) => {
  return (
    <div className={`popup-modal z-40 ${isOpen ? 'popup-modal-is-active' : ''}`}>
      <div
        className='popup-modal-background'
        onClick={onClose}
      ></div>
      <div className='popup-modal-content z-50 container-dark min-w-[360px] sm:min-w-[480px] max-w-full'>{children}</div>
    </div>
  );
};
