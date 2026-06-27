import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, Typography, CircularProgress } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { useApi } from '../hooks/useApi';
import { useAuth } from '../hooks/useAuth';

const ProductList = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { data, error, isLoading } = useApi('GET', '/products');

  if (!auth && auth_required) {
    navigate('/login', { replace: true });
  }

  if (isLoading) {
    return (
      <Grid container justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Grid>
    );
  }

  if (error) {
    return (
      <Grid container justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6">Error: {error.message}</Typography>
      </Grid>
    );
  }

  return (
    <Grid container spacing={2} padding={2}>
      {data.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;