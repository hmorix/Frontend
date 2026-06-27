import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { Products } from './pages/Products';
import { Orders } from './pages/Orders';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/Layout';
import { DesignSystemProvider } from './contexts/DesignSystemContext';
import { ApiProvider } from './contexts/ApiContext';

const App = () => {
  return (
    <DesignSystemProvider>
      <ApiProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ApiProvider>
    </DesignSystemProvider>
  );
};

export default App;