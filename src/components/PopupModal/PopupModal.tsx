import { MouseEventHandler, ReactNode } from "react";
import './popupModal.css';
export const PopupModal = ({ children, isOpen, onClose }: { children: ReactNode, isOpen: Boolean, onClose: MouseEventHandler }) => {
  return (
    <div className={`popup-modal z-40 ${isOpen ? 'popup-modal-is-active' : ''}`}>
      <div
        className='popup-modal-background'
        onClick={onClose}
      ></div>
      <div className='popup-modal-content z-50 container-dark min-w-[360px] sm:min-w-[480px] max-w-full'>{children}</div>
      <button
        className='modal-close is-large'
        aria-label='close'
        onClick={onClose}
      ></button>
    </div>
  );
};
