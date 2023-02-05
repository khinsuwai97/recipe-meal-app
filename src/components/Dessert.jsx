import React, { useEffect } from 'react';

import useApi from '../hooks/useApi';
import Error from './Error';
import ShowMealItems from './ShowMealItems';

const Dessert = () => {
  const { meal: dessert, error, fetchMeal } = useApi('dessert');

  useEffect(() => {
    fetchMeal('dessert');
  }, []);

  if (error) {
    <Error text={error} />;
  }
  return <ShowMealItems headerText="Dessert" meals={dessert} />;
};

export default Dessert;
