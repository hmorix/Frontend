import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Badge component.
 *
 * @description A reusable badge component.
 * @designSystem { "design_system": "Badge", "component_tree": "Shared" }
 *
 * @param {Object} props
 * @param {string} props.children - Badge content.
 * @param {string} props.variant - Badge variant (e.g., "primary", "secondary", "success", "danger", "warning", "info", "light", "dark").
 * @param {string} props.size - Badge size (e.g., "sm", "lg").
 * @param {boolean} props.pill - Whether the badge should be a pill.
 * @param {string} props.className - Additional class names.
 * @param {Object} props.style - Inline styles.
 *
 * @returns {JSX.Element} Badge component.
 */
const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  pill = false,
  className = '',
  style = {},
}) => {
  const classes = classNames(
    'badge',
    `badge-${variant}`,
    `badge-${size}`,
    pill && 'badge-pill',
    className
  );

  return (
    <span
      aria-label={children}
      role="status"
      className={classes}
      style={style}
    >
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  pill: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Badge;