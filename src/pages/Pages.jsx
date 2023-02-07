import React from 'react';
import Cuisine from './Cuisine';
import Home from './Home';
import Search from './Search';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import RecipeDetail from '../components/RecipeDetail';
import { AnimatePresence } from 'framer-motion';
import FirstPage from '../components/FirstPage';

const Pages = ({ handleShowPage, handleBacktoFirstPage, showPage }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {showPage && (
          <Route
            path="/"
            element={<FirstPage handleShowPage={handleShowPage} />}
          />
        )}

        <Route
          path="/home"
          element={<Home handleBacktoFirstPage={handleBacktoFirstPage} />}
        />

        <Route path="/cuisine/:category" element={<Cuisine />} />
        <Route path="/search/:meal" element={<Search />} />
        <Route path="/detail/:id" element={<RecipeDetail />} />
        <Route path="*" element={<Navigate to="/home" replace={true} />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
