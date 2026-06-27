import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { useApi } from '../hooks/useApi';

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { data, error: apiError, isLoading } = useApi({
    method: 'GET',
    url: '/users',
  });

  useEffect(() => {
    setLoading(isLoading);
    setError(apiError);
  }, [isLoading, apiError]);

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <h1>Loading...</h1>
          </Grid>
        </Grid>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <h1>Error: {error.message}</h1>
          </Grid>
        </Grid>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Hero />
        </Grid>
        <Grid item xs={12}>
          <Features />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;