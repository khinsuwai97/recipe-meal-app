import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

export const API_KEY = 'f7f4fb6602b14a4794ac47f148e5b48b';

const useApi = (storageName) => {
  const [meal, setMeal] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMeal = useCallback(async (value) => {
    const check = localStorage.getItem(storageName);
    if (check) {
      setMeal(JSON.parse(check));
    } else {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9&${
            value ? `tags=${value}` : ''
          }`
        );

        localStorage.setItem(storageName, JSON.stringify(data.recipes));
        setMeal(data.recipes);

        setLoading(false);
      } catch (err) {
        if (err) {
          console.error(err);
          setError('Error with fetching meal');
        }
      }
      setLoading(false);
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem(storageName, JSON.stringify(meal));
  // }, [meal]);

  return { meal, error, loading, fetchMeal };
};

export default useApi;
