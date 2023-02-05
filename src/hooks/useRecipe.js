import { useState, useCallback } from 'react';
import { API_KEY } from './useSearch';
import axios from 'axios';

const useRecipe = () => {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDetail = useCallback(async (id) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      );

      console.log(data);

      setDetails(data);
      setLoading(false);
    } catch (err) {
      if (err) {
        console.error(err);
        setError('Error with fetching information in detail');
      }
    }
    setLoading(false);
  }, []);

  return { details, error, loading, fetchDetail };
};

export default useRecipe;
