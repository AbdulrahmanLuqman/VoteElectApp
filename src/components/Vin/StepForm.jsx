import React, { useState } from "react";
import Biometrics from "./Biometrics";
import CastVote from "./CastVote";
import { FaArrowLeft } from "react-icons/fa";
import Verify from "./verify";

const StepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="max-w-md mx-4 md:mx-auto py-4">
      <h1 className="text-black  font-semibold text-xl gap-4 mb-6 flex ">
        <FaArrowLeft className="" /> 
        <p>Vote for Presidency</p>
      </h1>
      <div className="mx-4 flex justify-between items-center mb-4">
        <div className="flex flex-col items-center">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
              step >= 1 ? "bg-green-500" : "bg-gray-400"
            }`}
          >
            1
          </div>
          <div className="text-xs text-center font-medium text-gray-600 mt-1">
            Verify ID
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex mt-[-1.3rem] justify-center items-center text-gray-500">
            ---------
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
              step >= 2 ? "bg-green-500" : "bg-gray-400"
            }`}
          >
            2
          </div>
          <div className="text-xs font-medium text-center text-gray-600 mt-1">
            Facial Recognition
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex mt-[-1.3rem] items-center text-gray-500">
            --------
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
              step >= 3 ? "bg-green-500" : "bg-gray-400"
            }`}
          >
            3
          </div>
          <div className="text-xs text-center font-medium text-gray-600 mt-1">
            Confirm Vote
          </div>
        </div>
      </div>
      {step === 1 && <Verify nextStep={nextStep} />}
      {step === 2 && <Biometrics nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <CastVote prevStep={prevStep} />}
    </div>
  );
};

export default StepForm;
