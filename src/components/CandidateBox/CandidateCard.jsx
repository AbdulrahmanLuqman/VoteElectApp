import React from "react";
import { Link } from "react-router-dom";

const Card = ({ logo, picture, title, description, profileLink, voteLink }) => {
  return (
    <div className="max-w-md mx-auto my-10 border-green-300 border rounded-2xl overflow-hidden">
      <div className="relative">
        <div className="absolute top-0 right-4 flex justify-center items-center w-12 h-10">
          <img className="w-fit object-cover" src={logo} alt="logo" />
        </div>
        <div className="grid grid-cols-3 py-12 justify-center items-center">
          <div className="flex justify-center items-center h-20 w-20 rounded-full border-green-600 border-2 mx-auto">
            <img
              className="w-fit rounded-full object-cover"
              src={picture}
              alt="picture"
            />
          </div>

          <div className="col-span-2 mr-10">
            <h2 className="text-gray-800 font-semibold text-lg">{title}</h2>
            <p className="text-gray-600 mt-1">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 px-4  mb-8">
        <a
          href={profileLink}
          className="w-[50%] bg-white border text-center border-green-500 hover:bg-green-500 hover:text-white font-semibold py-2 px-2 rounded-lg"
        >
          See Profile
        </a>
        <Link to="/stepform"
          className="w-[50%] bg-green-500 text-center hover:bg-green-600 text-white font-semibold py-2 px-2 rounded-lg"
        >
          Vote
        </Link>
      </div>
    </div>
  );
};

export default Card;
