import React from 'react'
import Tab from './Elections';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import BottomNavLinks from './BottomNavLinks';

const Vote = () => {
    const [search, setSearch] = React.useState("");

  return (
    <div className="flex bg-gray-100 py-20 justify-center  pt-6 px-4 md:px-12">
      <div className="max-w-[620px]">
        <h1 className=" text-black font-semibold text-2xl gap-36 mb-6 flex items-center ">
          <FaArrowLeft className="" /> Vote
        </h1>
        <div className="flex items-center gap-2 w-full py-4 bg-gray-200 rounded-lg border-2 border-solid pl-4 border-gray-300 ">
          <FaSearch className="text-gray-400 text-xl" />
          <input
            type="text"
            placeholder=" Search election or year"
            className="font-semibold text-xl bg-inherit focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Tab />
      </div>
      <BottomNavLinks />
    </div>
  );
}

export default Vote