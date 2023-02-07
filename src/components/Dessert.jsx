import React, { useEffect } from 'react';
import useApi from '../hooks/useApi';
import Error from './Error';
import ShowMealItems from './ShowMealItems';
import Loader from './Loader';

const Dessert = () => {
  const { meal: dessert, error, loading, fetchMeal } = useApi('dessert');

  useEffect(() => {
    fetchMeal('dessert');
  }, []);
  // useEffect(() => {
  //   localStorage.setItem('dessert', JSON.stringify(dessert));
  // }, [dessert]);

  if (error) {
    <Error text={error} />;
  }

  if (loading) {
    return <Loader />;
  }

  return <ShowMealItems headerText="Dessert" meals={dessert} />;
};

export default Dessert;
