import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

const OngoningElect = () => {
  return (
      <div className="max-w-[620px] mt-6 overflow-hidden border-gray-3 rounded-xl border-2 border-gray-300 border-solid ">
      <div className="px-6 py-8">
        <h1 className="font-bold text-2xl mb-4">President Candidates</h1>
        <p className='text-[15px] font-semibold mb-6 text-gray-600'>Candidates: 5</p>
        <div className="flex justify-between ">
            <div className='flex justify-start'>
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
            className="w-16 h-16 rounded-full ml-[-16px]"
            src="https://via.placeholder.com/50"
            alt="Contact"
            />
          <img
            className="w-16 h-16 rounded-full ml-[-16px]"
            src="https://via.placeholder.com/50"
            alt="Contact"
            />
            </div>
            <FaArrowRight className='text-2xl text-green-700'/>
        </div>
      </div>
    </div>
  );
}

export default OngoningElect