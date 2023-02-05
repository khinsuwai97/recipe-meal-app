import React, { useEffect } from 'react';
import useApi from '../hooks/useApi';
import Error from './Error';
import ShowMealItems from './ShowMealItems';

const Popular = () => {
  const { meal: popular, error, fetchMeal } = useApi('popular');

  if (error) {
    <Error text={error} />;
  }

  useEffect(() => {
    fetchMeal();
  }, []);

  return <ShowMealItems headerText="Trending" meals={popular} />;
};

export default Popular;
