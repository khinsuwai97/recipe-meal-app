import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const API_KEY = 'f7f4fb6602b14a4794ac47f148e5b48b';

const useApi = (storageName) => {
  const [meal, setMeal] = useState(
    JSON.parse(localStorage.getItem(storageName)) || []
  );
  const [error, setError] = useState(null);

  const fetchMeal = useCallback(async (value) => {
    if (meal) {
      return;
    }
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9&${
          value ? `tags=${value}` : ''
        }`
      );
    
      setMeal(data.recipes);
    } catch (err) {
      if (err) {
        console.error(err);
        setError('Error with fetching meal');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageName, JSON.stringify(meal));
  }, [meal]);

  return { meal, error, fetchMeal };
};

export default useApi;