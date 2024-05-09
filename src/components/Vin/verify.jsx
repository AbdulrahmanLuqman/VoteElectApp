import React, { useState } from "react";

const Verify = ({ nextStep }) => {
  const [verificationID, setVerificationId] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (verificationID.trim() === "") {
      setError("Please enter your Voters Identification Number (VIN)");
      return;
    }
    nextStep();
  };

  return (
    <div className="my-12 mx-4">
      <div className="w-full py-6 bg-white shadow-lg rounded-lg pl-3">
        <input
          type="text"
          placeholder="901H DFK0 9340 3402 9486"
          className="font-semibold text-xl bg-inherit focus:outline-none"
          value={verificationID}
          onChange={(e) => setVerificationId(e.target.value)}
        />
      </div>
      <h2 className="md:text-xl text-base font-semibold text-center mt-8">
        Please enter your Voters Identification Number (VIN)
      </h2>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      <button
        className="bg-green-500 text-center mt-52 hover:bg-green-600 text-white font-semibold py-2 w-full rounded-lg"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default Verify;
