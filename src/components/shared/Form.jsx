/**
 * Reusable Form component.
 *
 * @param {Object} props
 * @param {string} props.id - Unique identifier for the form.
 * @param {string} props.className - Additional class names for the form.
 * @param {string} props.action - Form action URL.
 * @param {string} props.method - Form submission method (e.g., "get", "post").
 * @param {boolean} props.disabled - Whether the form is disabled.
 * @param {React.ReactNode} props.children - Form fields and buttons.
 * @param {Object} props.designSystem - Design system configuration.
 * @param {Object} props.designSystem.componentTree - Component tree configuration.
 * @param {Function} props.onSubmit - Form submission event handler.
 * @param {Function} props.onReset - Form reset event handler.
 */
import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
  id,
  className,
  action,
  method,
  disabled,
  children,
  designSystem,
  componentTree,
  onSubmit,
  onReset,
}) => {
  const classNames = [
    'form',
    className,
    designSystem.componentTree.form.base,
    disabled && designSystem.componentTree.form.disabled,
  ].filter(Boolean).join(' ');

  return (
    <form
      id={id}
      className={classNames}
      action={action}
      method={method}
      onSubmit={onSubmit}
      onReset={onReset}
      aria-disabled={disabled}
      aria-label={designSystem.componentTree.form.ariaLabel}
    >
      {children}
    </form>
  );
};

Form.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  action: PropTypes.string,
  method: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  designSystem: PropTypes.object.isRequired,
  componentTree: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
};

Form.defaultProps = {
  id: '',
  className: '',
  action: '',
  method: 'get',
  disabled: false,
  onSubmit: () => {},
  onReset: () => {},
};

export default Form;