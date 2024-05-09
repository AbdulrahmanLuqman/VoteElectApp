import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInAccount } from "../../lib/appwrite/api"; // Import the signInAccount function

const SignIn = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    faceRecognitionId: "",
  };

  const [formData, setFormData] = useState(initialValues);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    // Validate form fields
    if (!formData.email.trim() || !formData.faceRecognitionId.trim()) {
      setError("All fields are required");
      return;
    }

    try {
      // Call signInAccount function to sign in user
      const signInSession = await signInAccount(formData);

      // Redirect user to dashboard upon successful sign-in
      if (signInSession) {
        navigate("/home");
      } else {
        setError("Sign-in failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      setError("Error signing in. Please try again.");
    }
  };

  return (
    <div className="flex justify-center w-full px-10 py-4">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col items-center max-[500px]:block w-full space-y-6"
      >
        <h1 className="text-[1.5rem] font-black text-center">Sign In</h1>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-bold">
            Email<span className="text-green-500">*</span>
          </label>
          <input
            onChange={handleChange}
            id="email"
            name="email"
            type="email"
            value={formData.email}
            className="w-[400px] max-[500px]:w-full border border-green-300 px-2 py-[1px] font-semibold outline-none rounded-md focus:border-green-700 focus:border-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="faceRecognitionId" className="font-bold">
            Face Recognition ID<span>*</span>
          </label>
          <input
            onChange={handleChange}
            id="faceRecognitionId"
            name="faceRecognitionId"
            type="text"
            value={formData.faceRecognitionId}
            className="w-[400px] max-[500px]:w-full border border-green-300 px-2 py-[1px] font-semibold outline-none rounded-md focus:border-green-700 focus:border-2"
          />
        </div>

        {error && <span className="italic text-red-500">{error}</span>}

        <button
          type="submit"
          className="bg-green-700 text-white font-semibold w-[400px] max-[500px]:w-full p-[2px] rounded-md"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
