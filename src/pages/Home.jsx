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
      <div className="flex justify-center items-center mb-8">
        <Link
          className=" font-nunitoSans sm:text-[16px] text-[12px] text-center px-3 py-1 rounded-[30px] bg-gradient text-whiteColor font-semibold cursor-pointer"
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
