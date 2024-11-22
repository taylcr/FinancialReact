import { useState, useEffect } from 'react';

export const useFetchData = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [url, options]);

  return { data, error };
};
