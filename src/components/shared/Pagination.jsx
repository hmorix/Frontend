/**
 * Pagination component.
 *
 * @param {Object} props
 * @param {number} props.currentPage - The current page number.
 * @param {number} props.totalPages - The total number of pages.
 * @param {function} props.onChange - The callback function when the page changes.
 * @param {Object} props.designSystem - The design system configuration.
 * @param {Object} props.componentTree - The component tree configuration.
 * @param {string} props.className - The CSS class name.
 * @param {string} props.testId - The test ID.
 */
import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({
  currentPage,
  totalPages,
  onChange,
  designSystem,
  componentTree,
  className,
  testId,
}) => {
  const { colors, typography } = designSystem;
  const { pagination } = componentTree;

  const handlePageChange = (pageNumber) => {
    onChange(pageNumber);
  };

  return (
    <nav
      className={className}
      data-testid={testId}
      aria-label="Pagination navigation"
    >
      <ul
        className="pagination-list"
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {currentPage > 1 && (
          <li>
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              style={{
                backgroundColor: colors.background,
                color: colors.text,
                border: `1px solid ${colors.border}`,
                padding: '8px 16px',
                fontSize: typography.fontSize,
                cursor: 'pointer',
              }}
              aria-label="Previous page"
            >
              Previous
            </button>
          </li>
        )}
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <li key={pageNumber}>
            <button
              type="button"
              onClick={() => handlePageChange(pageNumber + 1)}
              style={{
                backgroundColor:
                  currentPage === pageNumber + 1
                    ? colors.primary
                    : colors.background,
                color:
                  currentPage === pageNumber + 1
                    ? colors.primaryText
                    : colors.text,
                border: `1px solid ${colors.border}`,
                padding: '8px 16px',
                fontSize: typography.fontSize,
                cursor: 'pointer',
              }}
              aria-label={`Page ${pageNumber + 1}`}
              aria-current={currentPage === pageNumber + 1 ? 'page' : null}
            >
              {pageNumber + 1}
            </button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li>
            <button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              style={{
                backgroundColor: colors.background,
                color: colors.text,
                border: `1px solid ${colors.border}`,
                padding: '8px 16px',
                fontSize: typography.fontSize,
                cursor: 'pointer',
              }}
              aria-label="Next page"
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  designSystem: PropTypes.object.isRequired,
  componentTree: PropTypes.object.isRequired,
  className: PropTypes.string,
  testId: PropTypes.string,
};

Pagination.defaultProps = {
  className: '',
  testId: '',
};

export default Pagination;