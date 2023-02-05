import React, { useEffect } from 'react';
import useApi from '../hooks/useApi';
import Error from './Error';
import ShowMealItems from './ShowMealItems';

const Veggie = () => {
  const { meal: veggie, error, fetchMeal } = useApi('veggie');

  useEffect(() => {
    fetchMeal('vegetarian');
  }, []);

  if (error) {
    <Error text={error} />;
  }
  return <ShowMealItems headerText="Vegetarian" meals={veggie} />;
};

export default Veggie;
