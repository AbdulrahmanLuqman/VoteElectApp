import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UpcomingElect = () => {
  return (
    <Link to="/candidate">
    <div className="max-w-[620px] flex flex-col gap-8 mt-6 overflow-hidden  ">
      <div className="px-6 py-8 border-gray-3 rounded-xl border-2 border-gray-300 border-solid">
        <h1 className="font-bold text-2xl mb-4">Governorship</h1>
        <p className="text-[15px] font-semibold mb-6 text-gray-600">
          Candidates: 3
        </p>
        <div className="flex justify-between ">
          <div className="flex justify-start">
            <img
              className="w-16 h-16 rounded-full "
              src="https://via.placeholder.com/50"
              alt="Contact"
            />
            <img
              className="w-16 h-16 rounded-full ml-[-16px]"
              src="https://via.placeholder.com/50"
              alt="Contact"
            />
            <img
              className="w-16 h-16 rounded-full ml-[-16px] "
              src="https://via.placeholder.com/50"
              alt="Contact"
            />
          </div>
          <FaArrowRight className="text-2xl text-green-700" />
        </div>
      </div>
      <div className="px-6 py-8 border-gray-3 rounded-xl border-2 border-gray-300 border-solid">
        <h1 className="font-bold text-2xl mb-4">House of Representatives</h1>
        <p className="text-[15px] font-semibold mb-6 text-gray-600">
          Candidates: 3
        </p>
        <div className="flex justify-between ">
          <div className="flex justify-start">
            <img
              className="w-16 h-16 rounded-full "
              src="https://via.placeholder.com/50"
              alt="Contact"
            />
            <img
              className="w-16 h-16 rounded-full ml-[-16px] "
              src="https://via.placeholder.com/50"
              alt="Contact"
            />
            <img
              className="w-16 h-16 rounded-full ml-[-16px] "
              src="https://via.placeholder.com/50"
              alt="Contact"
            />
            <img
              className="w-16 h-16 rounded-full ml-[-16px] "
              src="https://via.placeholder.com/50"
              alt="Contact"
            />
            <img
              className="w-16 h-16 rounded-full ml-[-16px] "
              src="https://via.placeholder.com/50"
              alt="Contact"
            />
          </div>
          <FaArrowRight className="text-2xl text-green-700" />
        </div>
      </div>
    </div>
    </Link>
  );
}

export default UpcomingElect