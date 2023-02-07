import React, { useEffect } from 'react';
import useApi from '../hooks/useApi';
import Error from './Error';
import ShowMealItems from './ShowMealItems';
import Loader from './Loader';

const Veggie = () => {
  const { meal: veggie, error, loading, fetchMeal } = useApi('veggie');

  useEffect(() => {
    fetchMeal('vegetarian');
  }, []);

  useEffect(() => {
    localStorage.setItem('veggie', JSON.stringify(veggie));
  }, [veggie]);

  if (error) {
    <Error text={error} />;
  }
  if (loading) {
    return <Loader />;
  }
  return <ShowMealItems headerText="Vegetarian" meals={veggie} />;
};

export default Veggie;
