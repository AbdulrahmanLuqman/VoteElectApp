
import React, { useState } from "react";
import { FaUserLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const Biometrics = ({ nextStep, prevStep }) => {
  const [biometricsCaptured, setBiometricsCaptured] = useState(false);

  const handleContinue = () => {
    if (!biometricsCaptured) {
      alert("Please capture and store your face ID.");
      return;
    }
    nextStep();
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="border border-gray-300 p-2 rounded-md">
        <div className="p-2 flex justify-center items-center">
          <div className="h-48 w-48 bg-gray-200 flex items-center justify-center rounded-lg"> 
            <span className= "text-8xl text-gray-600"><FaUserLock/></span>
          </div>
        </div>
        <h2 className="md:text-lg text-base font-semibold text-center mt-8">
          To ensure that its you making this request, we'll like to verify your face.
        </h2>
      </div>
      <button
        className="bg-green-500  mt-24 hover:bg-green-600 text-white  font-semibold py-2 w-full rounded-lg"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default Biometrics;
