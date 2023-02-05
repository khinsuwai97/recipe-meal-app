import React from 'react';

const Error = ({ text }) => {
  return (
    <div className="flex justify-center items-center pt-[100px]">
      <h2 className="font-nunitoSans text-[20px] text-red ">{text}!</h2>
    </div>
  );
};

export default Error;
