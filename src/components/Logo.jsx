import React from 'react';
import { GiKnifeFork } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="flex items-center mb-6 mt-2">
      <Link
        to="/home"
        className="font-dancingScript text-gradient font-bold text-[36px]"
      >
        Delicito
      </Link>
      <Link to="/home" className="text-[26px] text-greenShade ">
        <GiKnifeFork />
      </Link>
    </div>
  );
};

export default Logo;
