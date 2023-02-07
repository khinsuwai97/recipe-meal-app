import React, { useEffect } from 'react';
import useApi from '../hooks/useApi';
import Error from './Error';
import ShowMealItems from './ShowMealItems';
import Loader from './Loader';

const Popular = () => {
  const { meal: popular, error, loading, fetchMeal } = useApi('popular');

  useEffect(() => {
    fetchMeal();
  }, []);

  useEffect(() => {
    localStorage.setItem('popular', JSON.stringify(popular));
  }, [popular]);

  if (error) {
    <Error text={error} />;
  }

  if (loading) {
    return <Loader />;
  }

  return <ShowMealItems headerText="Trending" meals={popular} />;
};

export default Popular;
