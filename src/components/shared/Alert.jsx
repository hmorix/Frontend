/**
 * Reusable Alert component.
 *
 * @param {Object} props
 * @param {string} props.variant - The variant of the alert (success, error, warning, info)
 * @param {string} props.title - The title of the alert
 * @param {string} props.message - The message of the alert
 * @param {boolean} props.dismissible - Whether the alert is dismissible
 * @param {function} props.onDismiss - The callback function when the alert is dismissed
 * @param {Object} props.designSystem - The design system configuration
 * @param {Object} props.designSystem.componentTree - The component tree configuration
 */

import React from 'react';
import classNames from 'classnames';

const Alert = ({
  variant,
  title,
  message,
  dismissible,
  onDismiss,
  designSystem,
  componentTree,
}) => {
  const classes = classNames(
    'alert',
    `alert-${variant}`,
    { 'alert-dismissible': dismissible },
    designSystem.componentTree.alert?.className
  );

  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss();
    }
  };

  return (
    <div
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      className={classes}
    >
      {title && <h4 className="alert-title">{title}</h4>}
      <p className="alert-message">{message}</p>
      {dismissible && (
        <button
          type="button"
          className="alert-close"
          aria-label="Close"
          onClick={handleDismiss}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      )}
      <style jsx>
        {`
          .alert {
            position: relative;
            padding: 1rem;
            margin-bottom: 1rem;
            border: 1px solid transparent;
            border-radius: 0.25rem;
          }

          .alert-success {
            color: #155724;
            background-color: #d4edda;
            border-color: #c3e6cb;
          }

          .alert-error {
            color: #721c24;
            background-color: #f8d7da;
            border-color: #f5c6cb;
          }

          .alert-warning {
            color: #856404;
            background-color: #fff3cd;
            border-color: #ffeeba;
          }

          .alert-info {
            color: #0c5460;
            background-color: #d1ecf1;
            border-color: #bee5eb;
          }

          .alert-dismissible {
            padding-right: 4rem;
          }

          .alert-dismissible .alert-close {
            position: absolute;
            top: 0;
            right: 0;
            padding: 1rem;
            color: inherit;
          }

          .alert-title {
            margin-top: 0;
          }

          .alert-message {
            margin-bottom: 0;
          }

          @media (max-width: 576px) {
            .alert {
              padding: 0.5rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Alert;