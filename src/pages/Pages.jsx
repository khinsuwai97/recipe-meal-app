import React from 'react';
import Cuisine from './Cuisine';
import Home from './Home';
import Search from './Search';
import { Routes, Route, Navigate } from 'react-router-dom';

import RecipeDetail from '../components/RecipeDetail';

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:category" element={<Cuisine />} />
      <Route path="/search/:meal" element={<Search />} />
      <Route path="/detail/:id" element={<RecipeDetail />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};

export default Pages;
