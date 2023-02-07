import React, { useEffect } from 'react';
import useSearch from '../hooks/useSearch';
import { useParams, Link } from 'react-router-dom';
import Loader from './Loader';
import Error from './Error';
import { motion } from 'framer-motion';

const SearchMeals = () => {
  const param = useParams().meal;
  const { meal: meals, error, loading, fetchMeal } = useSearch();

  useEffect(() => {
    fetchMeal('query', param);
  }, [param]);

  if (error) {
    return <Error text={error} />;
  }

  if (loading) {
    return <Loader />;
  }

  if (meals.length < 1) {
    return <Error text="Could not find your meal.Please try again!!" />;
  }

  return (
    <motion.div
      className="container my-0 mx-auto py-10"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-x-4 gap-x-2 gap-y-8">
        {meals.map((meal) => {
          return (
            <div
              className="meal w-[250px] h-[260px] z-[1] relative cursor-pointer md:justify-self-auto justify-self-center"
              key={meal.id}
            >
              <Link to={`/detail/${meal.id}`}>
                <img
                  src={meal.image}
                  alt={meal.title}
                  className="w-full  object-cover"
                />
                <p
                  className="font-nunitoSans text-greenShade text-[16px]
            font-semibold my-2 px-2 z-20 "
                >
                  {meal.title}
                </p>
                <div className="gradient"></div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center mt-9">
        <Link
          to="/home"
          className="bg-gradient font-nunitoSans sm:text-[20px] text-[16px] text-center px-4 py-1 rounded-[30px] text-whiteColor font-semibold cursor-pointer "
        >
          &larr; Back to home
        </Link>
      </div>
    </motion.div>
  );
};

export default SearchMeals;

{
  /* <div
className={`w-[30px] h-[30px] rounded-full flex justify-center items-center circle mb-2 cursor-pointer absolute top-[10px] right-[10px] bg-whiteColor border  z-20`}
>
<span className="text-[18px] text-greenShade ">
  <HiHeart />
</span>
</div> */
}
