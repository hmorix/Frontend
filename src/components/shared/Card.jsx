/**
 * Reusable Card component.
 *
 * @param {Object} props
 * @param {string} props.title - The title of the card.
 * @param {string} props.description - The description of the card.
 * @param {React.ReactNode} props.children - The content of the card.
 * @param {string} props.className - Additional class names for the card.
 * @param {string} props.variant - The variant of the card (e.g., "default", "outlined", "filled").
 * @param {boolean} props.disabled - Whether the card is disabled.
 * @param {boolean} props.selected - Whether the card is selected.
 * @param {function} props.onClick - The click event handler for the card.
 * @param {Object} props.designSystem - The design system configuration.
 * @param {Object} props.componentTree - The component tree configuration.
 */
import React from 'react';

const Card = ({
  title,
  description,
  children,
  className,
  variant = 'default',
  disabled = false,
  selected = false,
  onClick,
  designSystem,
  componentTree,
}) => {
  const classes = [
    'card',
    variant,
    disabled ? 'disabled' : '',
    selected ? 'selected' : '',
    className,
  ].join(' ');

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      aria-selected={selected}
      className={classes}
      onClick={disabled ? undefined : onClick}
    >
      {title && (
        <h2 className="card-title" aria-label={title}>
          {title}
        </h2>
      )}
      {description && (
        <p className="card-description" aria-label={description}>
          {description}
        </p>
      )}
      {children && <div className="card-content">{children}</div>}
    </div>
  );
};

export default Card;