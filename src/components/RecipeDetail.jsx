import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import useRecipe from '../hooks/useRecipe';
import Error from './Error';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { nanoid } from 'nanoid';
import { motion } from 'framer-motion';

const RecipeDetail = () => {
  const [activeTab, setActiveTab] = useState('instructions');
  const { details, error, loading, fetchDetail } = useRecipe();
  const { id } = useParams();

  useEffect(() => {
    fetchDetail(id);
  }, [id]);

  if (error) {
    return <Error text={error} />;
  }

  if (loading) {
    return <Loader />;
  }

  if (details === null) {
    return;
  }

  const activeClass = 'bg-gradient text-whiteColor border-none ';

  return (
    <motion.div
      className="container my-0 mx-auto py-10"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-0 gap-8">
        <div>
          <h2 className="font-nunitoSans mb-4 ml-4 sm:text-[18px] text-[16px] text-greenShade font-semibold">
            {details.title}
          </h2>
          <img
            src={details.image}
            alt={details.title}
            className="w-[80%]  meal"
          />
        </div>
        <div>
          <div className="flex  items-center gap-5 mb-4 ">
            <button
              className={`font-nunitoSans text-[16px]  text-center px-3 py-1 rounded-[30px] text-greenShade font-semibold cursor-pointer border border-greenShade ${
                activeTab === 'instructions' ? activeClass : null
              }`}
              onClick={() => setActiveTab('instructions')}
            >
              Instructions
            </button>
            <button
              className={`font-nunitoSans text-[16px]  text-center px-3 py-1 rounded-[30px] text-greenShade font-semibold cursor-pointer border border-greenShade  ${
                activeTab == 'ingredients' ? activeClass : null
              }`}
              onClick={() => setActiveTab('ingredients')}
            >
              Ingredients
            </button>
          </div>
          {activeTab === 'instructions' && (
            <Fragment>
              <p
                className="font-nunitoSans text-[16px]  text-greenShade"
                dangerouslySetInnerHTML={{ __html: details.instructions }}
              ></p>
              <br />
              <p
                className="font-nunitoSans text-[16px]  text-greenShade"
                dangerouslySetInnerHTML={{ __html: details.summary }}
              ></p>
            </Fragment>
          )}
          {activeTab === 'ingredients' && (
            <div>
              <div className="flex gap-6 items-center">
                <div className="flex items-center gap-2 ">
                  <span className="text-[22px] text-greenShade">
                    <AiOutlineClockCircle />
                  </span>
                  <p className="text-[14px] text-greenShade font-nunitoSans uppercase">
                    <span className="font-semibold">
                      {details.readyInMinutes}
                    </span>{' '}
                    Minutes
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[22px] text-greenShade">
                    <BsPeople />
                  </span>
                  <p className="text-[14px] text-greenShade font-nunitoSans uppercase">
                    <span className="font-semibold">{details.servings}</span>{' '}
                    servings
                  </p>
                </div>
              </div>
              <ul className=" font-nunitoSans text-[16px] text-greenShade list-disc mt-4 ml-4   ">
                {details.extendedIngredients.map((ing) => {
                  return (
                    <li key={nanoid()} className="mb-2">
                      {ing.original}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
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

export default RecipeDetail;

{
  /* <div className="flex items-center gap-1">
<AiOutlinePlusCircle className="text-greenShade cursor-pointer text-[20px]" />
<AiOutlineMinusCircle className="text-greenShade cursor-pointer text-[20px]" />
</div> */
}
