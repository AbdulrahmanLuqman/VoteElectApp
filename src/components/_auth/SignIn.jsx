import flag from "../../assets/images/flag.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const initialValues = {
    lastName: "",
    firstName: "",
    otherName: "",
  };

  const [formData, setFormData] = useState(initialValues);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.lastName.trim() ||
      !formData.firstName.trim() ||
      !formData.otherName.trim()
    ) {
      setError("All fields are required");
    } else {
      setError("");
      navigate("/dashboard");
    }
<<<<<<<<< Temporary merge branch 1
    }
=========
  };

  return (
    <div className="flex justify-center w-full px-10 py-4">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col items-center max-[500px]:block w-full space-y-6"
      >
        <h1 className="text-[1.5rem] font-black text-center">Sign Up</h1>

        <div className="flex flex-col gap-2">
          <label htmlFor="last-name" className="font-bold">
            Last Name<span className="text-green-500">*</span>
          </label>
          <input
            onChange={handleChange}
            id="last-name"
            name="lastName"
            type="text"
            className="w-[400px] max-[500px]:w-full border border-green-300 px-2 py-[1px] font-semibold outline-none rounded-md focus:border-green-700 focus:border-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="first-name" className="font-bold">
            First Name<span>*</span>
          </label>
          <input
            onChange={handleChange}
            id="first-name"
            name="firstName"
            type="text"
            className="w-[400px] max-[500px]:w-full border border-green-300 px-2 py-[1px] font-semibold outline-none rounded-md focus:border-green-700 focus:border-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="other-name" className="font-bold">
            Other Name<span>*</span>
          </label>
          <input
            onChange={handleChange}
            id="other-name"
            name="otherName"
            type="text"
            className="w-[400px] max-[500px]:w-full border border-green-300 px-2 py-[1px] font-semibold outline-none rounded-md focus:border-green-700 focus:border-2"
          />
        </div>
        {error && <span className="text-red-500 italic">{error}</span>}

        <button
          type="submit"
          className="bg-green-700 text-white font-semibold w-[400px] max-[500px]:w-full p-[2px] rounded-md"
        >
          Sign In
        </button>
      </form>
      <img className="h-5 fixed left-10" src={flag} alt="flag" />
      <img className="h-5 fixed left-10 bottom-8" src={flag} alt="flag" />
      <img className="h-5 fixed right-10" src={flag} alt="flag" />
      <img className="h-5 fixed right-10 bottom-8" src={flag} alt="flag" />
    </div>
  );
};

export default SignIn
