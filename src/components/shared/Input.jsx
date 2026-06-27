import React, { forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import { designSystem } from '../../design-system';

/**
 * Reusable Input component.
 *
 * @param {InputHTMLAttributes<HTMLInputElement>} props
 * @param {string} [props.className] - Additional class names.
 * @param {string} [props.label] - Input label.
 * @param {string} [props.placeholder] - Input placeholder.
 * @param {boolean} [props.disabled] - Whether the input is disabled.
 * @param {boolean} [props.error] - Whether the input has an error.
 * @param {string} [props.errorMessage] - Error message to display.
 * @param {function} [props.onChange] - Input change event handler.
 * @param {function} [props.onBlur] - Input blur event handler.
 * @param {function} [props.onFocus] - Input focus event handler.
 * @param {string} [props.type] - Input type (e.g., text, email, password).
 * @param {string} [props.value] - Input value.
 * @param {string} [props.id] - Input ID.
 * @param {string} [props.name] - Input name.
 * @param {React.Ref<HTMLInputElement>} ref
 */
const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  (
    {
      className,
      label,
      placeholder,
      disabled,
      error,
      errorMessage,
      onChange,
      onBlur,
      onFocus,
      type,
      value,
      id,
      name,
      ...props
    },
    ref
  ) => {
    const inputClasses = classNames(
      'block w-full p-2 text-lg rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500',
      {
        'bg-gray-100': disabled,
        'border-red-500': error,
      },
      className
    );

    const labelClasses = classNames('block text-lg font-medium text-gray-700', {
      'text-red-500': error,
    });

    const errorMessageClasses = classNames(
      'text-sm text-red-500 mt-1 block',
      designSystem.component_tree.input.errorMessage
    );

    return (
      <div>
        {label && (
          <label htmlFor={id} className={labelClasses}>
            {label}
          </label>
        )}
        <input
          type={type}
          value={value}
          id={id}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          ref={ref}
          className={inputClasses}
          {...props}
        />
        {error && errorMessage && (
          <div className={errorMessageClasses}>{errorMessage}</div>
        )}
      </div>
    );
  }
);

export default Input;