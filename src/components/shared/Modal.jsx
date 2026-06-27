import React, { ReactNode } from 'react';
import { designSystem, componentTree } from '../../design-system';

/**
 * Reusable Modal component.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether the modal is open.
 * @param {Function} props.onClose - Callback function to close the modal.
 * @param {ReactNode} props.children - Modal content.
 * @param {string} props.title - Modal title.
 * @param {string} props.description - Modal description.
 */
const Modal = ({ isOpen, onClose, children, title, description }) => {
  if (!isOpen) return null;

  return (
    <div
      aria-hidden={!isOpen}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      role="dialog"
      className="modal"
    >
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-content">
        <header className="modal-header">
          <h2 id="modal-title" className="modal-title">
            {title}
          </h2>
          <button
            type="button"
            className="modal-close"
            aria-label="Close modal"
            onClick={onClose}
          >
            &times;
          </button>
        </header>
        <div id="modal-description" className="modal-description">
          {description}
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;