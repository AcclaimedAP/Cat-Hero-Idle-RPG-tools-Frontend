import { MouseEventHandler, ReactNode } from "react";
import 'componoents/PopupModal/PopupModal.css';
export const PopupModal = ({ children, isOpen, onClose }: { children: ReactNode, isOpen: Boolean, onClose: MouseEventHandler }) => {
  return (
    <div className={`popup-modal z-40 ${isOpen ? 'popup-modal-is-active' : ''}`}>
      <div
        className='popup-modal-background'
        onClick={onClose}
      ></div>
      <div className='popup-modal-content z-50 container-dark'>{children}</div>
      <button
        className='modal-close is-large'
        aria-label='close'
        onClick={onClose}
      ></button>
    </div>
  );
};
