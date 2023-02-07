import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
const FirstPage = ({ handleShowPage }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8  ">
      <h1 className="text-gradient font-dancingScript font-bold sm:text-[64px] text-[40px] ">
        <Typed
          strings={[' Welcome to Delicito']}
          typeSpeed={100}
          backSpeed={100}
          loop
        />
      </h1>
      <p className="sm:text-[24px] font-nunitoSans text-gradient text-[16px] font-semibold tracking-tight">
        Learn to cook delicious meals right now!
      </p>
      <div>
        <Link
          className=" font-nunitoSans sm:text-[16px] text-[12px] text-center px-3 py-1 rounded-[30px] bg-gradient text-whiteColor font-semibold cursor-pointer "
          to="/home"
          onClick={handleShowPage}
        >
          Next &rarr;
        </Link>
      </div>
    </div>
  );
};

export default FirstPage;
