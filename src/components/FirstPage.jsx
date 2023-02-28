import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

const FirstPage = ({ handleShowPage, showPage }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${
        showPage === null ? 'mt-8' : 'h-screen'
      } gap-8`}
    >
      <h1 className="text-gradient font-dancingScript font-bold sm:text-[64px] text-[40px]  ">
        <Typewriter
          options={{
            strings: 'Welcome to Delicito',
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </h1>
      <p className="sm:text-[24px] font-nunitoSans text-gradient text-[16px] font-semibold tracking-tight">
        Learn to cook delicious meals right now!
      </p>
      {/* <p className="sm:text-[24px] font-nunitoSans text-gradient text-[16px] font-semibold tracking-tight">
        Please check What is trending
      </p> */}
      <div>
        <Link
          className=" font-nunitoSans sm:text-[20px] text-[16px] text-center px-4 py-1 rounded-[30px] bg-gradient text-whiteColor font-semibold cursor-pointer "
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
{
  /* <Typed
strings={[' Welcome to Delicito']}
typeSpeed={100}
backSpeed={100}
loop
/> */
}
