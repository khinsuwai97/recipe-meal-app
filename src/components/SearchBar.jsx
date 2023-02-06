import React, { useState, Fragment } from 'react';
import { BiSearch } from 'react-icons/bi';
import { GiKnifeFork } from 'react-icons/gi';
import Categories from './Categories';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim() === '' || searchTerm.length === 0) {
      return;
    }
    navigate(`/search/${searchTerm}`);
    setSearchTerm('');
  };

  return (
    <header className="ml-[24px] ">
      <div className="flex items-center mb-6 mt-2">
        <Link
          to="/"
          className="font-dancingScript text-gradient font-bold text-[36px]"
        >
          Delicito
        </Link>
        <Link to="/" className="text-[26px] text-greenShade ">
          <GiKnifeFork />
        </Link>
      </div>
      <form
        className="flex justify-center items-center  "
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          placeholder="Search Favorite Meal"
          className="py-[10px]  md:w-[35%]  px-[50px] rounded-[20px] bg-gradient text-whiteColor font-nunitoSans font-[16px] placeholder:text-dimWhite focus:outline-secondary "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="text-[20px] text-whiteColor top-[50%] left-[0%] translate-x-[-150%] opacity-[70%] hover:opacity-100"
          type="submit"
        >
          <BiSearch />
        </button>
      </form>
      <Categories />
    </header>
  );
};

export default SearchBar;
