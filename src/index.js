import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { DesignSystemProvider } from './design-system';
import { ComponentTreeProvider } from './component-tree';
import { ApiProvider } from './api';

const designSystem = {};
const componentTree = {};
const api = {
  openapi: '3.0.0',
  info: {
    title: 'Kinley API',
    description: 'API for managing users, products, and orders',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'https://api.kinley.com',
    },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DesignSystemProvider value={designSystem}>
        <ComponentTreeProvider value={componentTree}>
          <ApiProvider value={api}>
            <App />
          </ApiProvider>
        </ComponentTreeProvider>
      </DesignSystemProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to measure performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();