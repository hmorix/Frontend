/**
 * Reusable Table component
 *
 * @param {Object} props
 * @param {Array} props.data - Table data
 * @param {Array} props.columns - Table columns
 * @param {Function} props.onRowClick - Row click event handler
 * @param {Boolean} props.isLoading - Loading state
 * @param {String} props.className - Additional class names
 * @param {String} props.testId - Test ID for testing purposes
 */
import React from 'react';
import PropTypes from 'prop-types';

const Table = ({
  data,
  columns,
  onRowClick,
  isLoading,
  className,
  testId,
}) => {
  const tableClassNames = `${className} table w-full`;

  return (
    <div
      data-testid={testId}
      className="overflow-x-auto"
    >
      <table className={tableClassNames}>
        <caption className="sr-only">
          Table data
        </caption>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={columns.length} className="text-center p-6">
                Loading...
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr
                key={index}
                className="bg-white hover:bg-gray-50"
                onClick={() => onRowClick(row)}
              >
                {columns.map((column, columnIndex) => (
                  <td
                    key={columnIndex}
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  onRowClick: PropTypes.func,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  testId: PropTypes.string,
};

Table.defaultProps = {
  onRowClick: () => {},
  isLoading: false,
  className: '',
  testId: '',
};

export default Table;