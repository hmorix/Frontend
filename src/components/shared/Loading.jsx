import React from 'react';
import { CSSProperties } from 'react';
import { designSystem } from '../../design-system';

/**
 * Reusable Loading component.
 *
 * @param {Object} props - Component props
 * @param {string} props.className - Additional class names
 * @param {CSSProperties} props.style - Inline styles
 * @param {boolean} props.isLoading - Whether the component is loading
 * @param {string} props.size - Size of the loading indicator (small, medium, large)
 * @param {string} props.variant - Variant of the loading indicator (primary, secondary)
 * @param {string} props.label - Accessible label for the loading indicator
 * @param {string} props.dataTestId - Data test ID for the loading indicator
 * @returns {JSX.Element} Loading component
 */
const Loading = ({
  className,
  style,
  isLoading = true,
  size = 'medium',
  variant = 'primary',
  label,
  dataTestId,
}) => {
  if (!isLoading) return null;

  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8',
  };

  const variants = {
    primary: 'border-primary-500',
    secondary: 'border-secondary-500',
  };

  const classes = `
    ${designSystem.components.loading.base}
    ${sizes[size]}
    ${variants[variant]}
    ${className || ''}
  `;

  return (
    <div
      className={classes}
      style={style}
      role="progressbar"
      aria-label={label}
      aria-valuetext={label}
      aria-busy="true"
      data-testid={dataTestId}
    >
      <div className={designSystem.components.loading.spinner} />
    </div>
  );
};

export default Loading;