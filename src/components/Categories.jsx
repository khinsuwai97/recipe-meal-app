import React from 'react';
import data from './categoriesData';
import { NavLink } from 'react-router-dom';

const Categories = () => {
  return (
    <ul className="flex justify-center items-center mt-6 gap-6 sm:gap-10">
      {data.map((meal) => {
        return (
          <NavLink
            to={meal.link}
            key={meal.title}
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-solid  border-secondary' : undefined
            }
          >
            <div className="flex justify-center items-center flex-col">
              <span className="text-greenShade sm:text-[30px]">
                {' '}
                {meal.icon}
              </span>

              <p className="font-nunitoSans font-bold  text-[12px] sm:text-[16px] text-greenShade">
                {meal.title}
              </p>
            </div>
          </NavLink>
        );
      })}
    </ul>
  );
};

export default Categories;
