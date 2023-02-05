import { useState, useCallback } from 'react';
import axios from 'axios';

export const API_KEY = 'f7f4fb6602b14a4794ac47f148e5b48b';

const useSearch = () => {
  const [meal, setMeal] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMeal = useCallback(async (search, value) => {
 
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&${search}=${value}&number=10`
      );

      setMeal(data.results);
      setLoading(false);
    } catch (err) {
      if (err) {
        console.error(err);
        setError('Error with fetching cuisine');
      }
    }
    setLoading(false);
  }, []);

  return { meal, error, loading, fetchMeal };
};

export default useSearch;


