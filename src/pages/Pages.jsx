import React from 'react';
import Cuisine from './Cuisine';
import Home from './Home';
import Search from './Search';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import RecipeDetail from '../components/RecipeDetail';
import { AnimatePresence } from 'framer-motion';

const Pages = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:category" element={<Cuisine />} />
        <Route path="/search/:meal" element={<Search />} />
        <Route path="/detail/:id" element={<RecipeDetail />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
