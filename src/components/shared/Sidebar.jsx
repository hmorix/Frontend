/**
 * Reusable Sidebar component.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether the sidebar is open.
 * @param {Function} props.onToggle - Callback function to toggle the sidebar.
 * @param {Node} props.children - The content of the sidebar.
 * @param {string} props.className - Additional class names for the sidebar.
 * @param {Object} props.designSystem - The design system configuration.
 * @param {Object} props.componentTree - The component tree configuration.
 */
import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({
  isOpen,
  onToggle,
  children,
  className,
  designSystem,
  componentTree,
}) => {
  const { spacing, breakpoints } = designSystem;
  const { sidebar } = componentTree;

  return (
    <aside
      className={`${className} ${isOpen ? 'open' : 'closed'}`}
      aria-label="Sidebar"
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className="toggle-button"
        onClick={onToggle}
        aria-label="Toggle sidebar"
      >
        {isOpen ? 'Close' : 'Open'}
      </button>
      <div className="sidebar-content">
        {children}
      </div>
      <style jsx>{`
        aside {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          width: ${spacing.sidebarWidth};
          background-color: ${sidebar.backgroundColor};
          box-shadow: ${sidebar.boxShadow};
          transform: translateX(${isOpen ? 0 : -spacing.sidebarWidth});
          transition: transform 0.3s ease-in-out;
        }

        .toggle-button {
          position: absolute;
          top: ${spacing.headerHeight};
          right: ${spacing.sidebarWidth};
          background-color: ${sidebar.toggleButtonColor};
          border: none;
          padding: ${spacing.smallPadding};
          font-size: ${sidebar.toggleButtonFontSize};
          cursor: pointer;
        }

        .toggle-button:hover {
          background-color: ${sidebar.toggleButtonHoverColor};
        }

        .sidebar-content {
          padding: ${spacing.largePadding};
          overflow-y: auto;
        }

        @media (max-width: ${breakpoints.mobile}) {
          aside {
            width: 100%;
            transform: translateX(${isOpen ? 0 : -100%});
          }
        }
      `}</style>
    </aside>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  designSystem: PropTypes.object.isRequired,
  componentTree: PropTypes.object.isRequired,
};

Sidebar.defaultProps = {
  className: '',
};

export default Sidebar;