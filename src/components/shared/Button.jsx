import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';

/**
 * Reusable Button component.
 *
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant (primary, secondary, tertiary)
 * @param {string} props.size - Button size (small, medium, large)
 * @param {string} props.type - Button type (button, submit, reset)
 * @param {boolean} props.disabled - Whether the button is disabled
 * @param {boolean} props.isLoading - Whether the button is in a loading state
 * @param {string} props.children - Button content
 * @param {function} props.onClick - Click event handler
 */
const Button = ({
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  isLoading = false,
  children,
  onClick,
}) => {
  const className = classNames(
    'button',
    `button--${variant}`,
    `button--${size}`,
    { 'button--disabled': disabled },
    { 'button--loading': isLoading }
  );

  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      aria-disabled={disabled}
      aria-busy={isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <span className="button__loading-indicator" aria-hidden="true" />
      ) : (
        children
      )}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;