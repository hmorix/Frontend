/**
 * Reusable Navbar component.
 *
 * @param {Object} props
 * @param {string} props.variant - Variant of the navbar (e.g., 'primary', 'secondary')
 * @param {Array} props.items - Array of navbar items
 * @param {string} props.items[].label - Label of the navbar item
 * @param {string} props.items[].href - Link of the navbar item
 * @param {boolean} props.isSticky - Whether the navbar is sticky
 * @param {boolean} props.isOpen - Whether the navbar is open (for mobile devices)
 * @param {Function} props.onToggle - Callback function to toggle the navbar
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { designSystem } from '../../design-system';

const Navbar = ({
  variant = 'primary',
  items = [],
  isSticky = false,
  isOpen = false,
  onToggle,
}) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <nav
      aria-label="Main Navigation"
      className={`navbar ${variant} ${isSticky ? 'sticky' : ''}`}
      role="navigation"
    >
      <div className="container">
        <button
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
          className="navbar-toggle"
          onClick={onToggle}
          type="button"
        >
          <span className="sr-only">Toggle Navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <div
          aria-labelledby="navbar-menu"
          className={`navbar-menu ${isOpen ? 'open' : ''}`}
          id="navbar-menu"
          role="menu"
        >
          <ul>
            {items.map((item, index) => (
              <li key={index} role="menuitem">
                <NavLink
                  activeClassName="active"
                  aria-current={item.href === window.location.pathname ? 'page' : null}
                  exact
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;