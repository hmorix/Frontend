// frontend/src/hooks/useApi.js

import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url, method = 'GET', data = null, headers = null) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios({
          method,
          url,
          data,
          headers,
        });
        setResponse(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, method, data, headers]);

  return { response, error, loading };
};

export default useApi;