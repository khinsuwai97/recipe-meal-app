import React from 'react';
import Popular from '../components/Popular';
import Veggie from '../components/Veggie';
import Dessert from '../components/Dessert';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = ({ handleBacktoFirstPage }) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Popular />
      <Veggie />
      <Dessert />
      <div className="flex justify-center items-center my-8">
        <Link
          className=" font-nunitoSans sm:text-[20px] text-[16px] text-center px-4 py-1 rounded-[30px] bg-gradient text-whiteColor font-semibold cursor-pointer"
          to="/"
          onClick={handleBacktoFirstPage}
        >
          &larr; Back
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
