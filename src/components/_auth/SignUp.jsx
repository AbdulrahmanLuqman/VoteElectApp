import { useState, useEffect } from "react";
import flag from "../../assets/images/flag.png";
import { useNavigate } from "react-router-dom";
import WebcamCapture from "../WebcamCapture";
import Modal from "react-modal";
import axios from "axios";
Modal.setAppElement("#root");

const SignUp = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [imageSrc, setImageSrc] = useState("");
  // const [imgSrc, setImgSrc] = useState(null);

  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    // otherName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    // stateOfOrigin: "",
    // localGovt: "",
    faceRecognitionLabel: "",
    capturedImages: [],
  });
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);
  const [lgas, setLgas] = useState([]);

  useEffect(() => {
    fetch("https://nigeria-states-towns-lga.onrender.com/api/all")
      .then((response) => response.json())
      .then((data) => setResults(data))
      .catch((err) => console.log(err));
  }, []);

  const handleStateChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const selectedState = e.target.value;
    const stateDetails = results.find((state) => state.name === selectedState);

    setLgas(
      stateDetails.lgas.map((lga) => (
        <option key={lga.name} value={lga.name}>
          {lga.name}
        </option>
      ))
    );
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleCaptureImage = (imageSrc) => {
    setCapturedImage(imageSrc);
    setImageSrc(imageSrc);
    console.log(imageSrc);
  };

  const handleSaveImage = () => {
    setImageSrc(capturedImage);
    // console.log("Captured Image:", imgSrc);
    console.log("captured img", capturedImage);

    closeModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("Before update:", formData);
    setFormData({ ...formData, [name]: value });
    if (name === "userName") {
      generateFaceRecognitionId(value); 
    }
    console.log("After update:", formData);
  };

  const generateFaceRecognitionId = (username) => {
    const trimmedUsername = username.trim();
    const randomNumber = Math.floor(10000 + Math.random() * 90000); 
    const faceRecognitionId = trimmedUsername + randomNumber; 
    setFormData((prevData) => ({
      ...prevData,
      faceRecognitionLabel: faceRecognitionId,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      Object.values(formData).some(
        (value) => typeof value === "string" && value.trim() === ""
      ) ||
      !capturedImage
    ) {
      setError("All fields are required");
    } else {
      setError("");
      const updatedFormData = {
        userName: formData.userName,
        firstName: formData.firstName,
        middleName: formData.middleName,
        lastName: formData.lastName,
        dateOfBirth: formData.dateOfBirth,
        stateOfOrigin: formData.state,
        localGovt: formData.lga,
        faceRecognitionLabel: formData.faceRecognitionLabel,
        capturedImages: [capturedImage, ...formData.capturedImages],
      };

      console.log("img", capturedImage);
      console.log(formData);
      console.log(updatedFormData);

      try {
       
        const response = await axios.post(
          "https://voteelect.onrender.com/api/v1/register",
          updatedFormData
        );
        console.log("Response:", response.data);

        navigate("/signin");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const statesResult = Array.isArray(results)
    ? results.map((res) => (
        <option key={res.name} value={res.name}>
          {res.name}
        </option>
      ))
    : ["not an array"];

  return (
    <div className="flex justify-center w-full px-10 py-4">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col items-center max-[500px]:block w-full space-y-6"
      >
        <h1 className="text-[1.5rem] font-black text-center">Sign Up</h1>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-2" onClick={openModal}>
            <img
              src={imageSrc ? imageSrc : "/addimage.png"}
              alt=""
              className="w-9 h-9"
            />

            <button>Capture Photo</button>
          </div>
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <div className="flex items-center gap-4 justify-center">
            <div className="flex item-center gap-4 flex-col mt-9">
              <WebcamCapture onCapture={handleCaptureImage} />

              <button
                className="bg-green-900 text-white font-semibold w-full p-[2px] rounded-md"
                onClick={handleSaveImage}
              >
                Save Image
              </button>
            </div>
            <button className="absolute top-0 right-2" onClick={closeModal}>
              X
            </button>
          </div>
        </Modal>

        <div className="flex flex-col gap-2">
          <label htmlFor="last-name" className="font-bold">
            Last Name<span className="text-green-500">*</span>
          </label>
          <input
            onChange={handleInputChange}
            id="last-name"
            name="lastName"
            value={formData.lastName}
            type="text"
            className="w-[400px] max-[500px]:w-full border border-green-300 px-2 py-[1px] font-semibold outline-none rounded-md focus:border-green-700 focus:border-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="first-name" className="font-bold">
            First Name<span>*</span>
          </label>
          <input
            onChange={handleInputChange}
            id="first-name"
            name="firstName"
            value={formData.firstName}
            type="text"
            className="w-[400px] max-[500px]:w-full border border-green-300 px-2 py-[1px] font-semibold outline-none rounded-md focus:border-green-700 focus:border-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="other-name" className="font-bold">
            Middle Name<span>*</span>
          </label>
          <input
            onChange={handleInputChange}
            id="other-name"
            name="middleName"
            value={formData.middleName}
            type="text"
            className="w-[400px] max-[500px]:w-full border border-green-300 px-2 py-[1px] font-semibold outline-none rounded-md focus:border-green-700 focus:border-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="other-name" className="font-bold">
            Username<span>*</span>
          </label>
          <input
            onChange={handleInputChange}
            id="other-name"
            name="userName"
            value={formData.userName}
            type="text"
            className="w-[400px] max-[500px]:w-full border border-green-300 px-2 py-[1px] font-semibold outline-none rounded-md focus:border-green-700 focus:border-2"
          />
        </div>
        {/*  */}
        <div className="flex flex-col gap-2">
          <label htmlFor="other-name" className="font-bold">
            Face ID<span>*</span>
          </label>
          <input
            id="face-id"
            name="faceRecognitionLabel"
            value={formData.faceRecognitionLabel}
            disabled
            className="w-[400px] cursor-not-allowed max-[500px]:w-full border border-green-300 px-2 py-[1px] font-semibold outline-none rounded-md focus:border-green-700 focus:border-2"
          />
        </div>

        {/*  */}

        <div className="flex flex-col gap-2">
          <label htmlFor="dob" className="font-bold">
            Date of Birth<span>*</span>
          </label>
          <input
            onChange={handleInputChange}
            id="dob"
            type="date"
            name="dateOfBirth"
            value={formData.dob}
            className="w-[400px] max-[500px]:w-full border border-green-300 px-2 py-[1px] font-semibold outline-none rounded-md focus:border-green-700 focus:border-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="state-of-origin" className="font-bold">
            State of Origin
          </label>
          <select
            onChange={handleStateChange}
            id="state-of-origin"
            name="state"
            value={formData.state}
            className="w-[400px] max-[500px]:w-full border border-green-300 px-2 py-[1px] font-semibold outline-none rounded-md focus:border-green-700 focus:border-2"
          >
            <option>Select</option>
            {statesResult}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="local-government" className="font-bold">
            Local Government
          </label>
          <select
            onChange={handleInputChange}
            id="local-government"
            name="lga"
            value={formData.lga}
            className="w-[400px] max-[500px]:w-full border border-green-300 px-2 py-[1px] font-semibold outline-none rounded-md focus:border-green-700 focus:border-2"
          >
            <option>Select</option>
            {lgas}
          </select>
          {error && <span className="text-red-500 italic">{error}</span>}
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white font-semibold w-[400px] max-[500px]:w-full p-[2px] rounded-md"
        >
          Sign Up
        </button>
      </form>
      <img className="h-5 fixed left-10" src={flag} alt="flag" />
      <img className="h-5 fixed left-10 bottom-8" src={flag} alt="flag" />
      <img className="h-5 fixed right-10" src={flag} alt="flag" />
      <img className="h-5 fixed right-10 bottom-8" src={flag} alt="flag" />
    </div>
  );
};

export default SignUp;
