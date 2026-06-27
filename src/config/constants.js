// frontend/src/config/constants.js

export const DESIGN_SYSTEM = {
  COLORS: {
    PRIMARY: '#3498db',
    SECONDARY: '#f1c40f',
    SUCCESS: '#2ecc71',
    DANGER: '#e74c3c',
    WARNING: '#f39c12',
    INFO: '#1abc9c',
    LIGHT: '#f9f9f9',
    DARK: '#2c3e50',
  },
  FONT_SIZES: {
    SMALL: '12px',
    MEDIUM: '16px',
    LARGE: '20px',
  },
  FONT_FAMILIES: {
    PRIMARY: 'Open Sans, sans-serif',
  },
  SPACING: {
    SMALL: '8px',
    MEDIUM: '16px',
    LARGE: '24px',
  },
};

export const COMPONENT_TREE = {
  LAYOUT: {
    HEADER: 'Header',
    FOOTER: 'Footer',
    MAIN: 'Main',
  },
  NAVIGATION: {
    MENU: 'Menu',
    SUB_MENU: 'SubMenu',
  },
  FORMS: {
    INPUT: 'Input',
    SELECT: 'Select',
    BUTTON: 'Button',
  },
};

export const API = {
  OPENAPI: '3.0.0',
  INFO: {
    TITLE: 'Kinley API',
    DESCRIPTION: 'API for managing users, products, and orders',
    VERSION: '1.0.0',
  },
  SERVERS: [
    {
      URL: 'https://api.kinley.com',
      DESCRIPTION: 'Production server',
    },
  ],
};