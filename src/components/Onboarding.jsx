import { useState } from "react";
import { Link } from "react-router-dom";

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: "/flower1.jpg",
      content: (
        <>
          <div className="h1">LOGO</div>
        </>
      ),
    },
    {
      image: "/flower2.jpg",
      content: (
        <>
          <h1>Cast your Votes</h1>
          <p>
            Experience your right as a citizen and vote for the candidate of
            your choice
          </p>
        </>
      ),
    },
    {
      image: "/flower3.jpg",
      content: (
        <>
          <h1>Get or link your PVC</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
            tempora!
          </p>
        </>
      ),
    },
    {
      image: "/football4.jpg",
      content: (
        <>
          <div>
            <h1>Monitor the Process</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, soluta?
            </p>
          </div>
        </>
      ),
    },
    {
      image: "/images/football3.jpg",
      content: (
        <>
          <div className="flex flex-col items-center px-8">
            <div className="mb-4">
              <h1>Monitor the Process</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, soluta?
              </p>
            </div>
            <div className="w-full mt-8">
              <button className="w-full bg-green-500 py-2 text-white rounded-lg">
                Create an account
              </button>
              <h1 className=" mt-8">
                Already have an account?
                <Link className="text-green-400" to="/login">
                  Log in
                </Link>
              </h1>
            </div>
          </div>
        </>
      ),
    },
  ];

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      // Handle last slide
      console.log("Last slide reached. You can navigate to signup page.");
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className=" flex flex-col items-center gap-8 justify-center bg-green-100 h-screen w-full">
      <div className="relative">
        <div className="flex items-center ">
          <div className="left" onClick={prevSlide}>
            L
          </div>
          <div className="w-[300px] sm:w-[500px]">
            <img
              src={slides[currentIndex].image}
              alt=""
              className="w-full h-[200px] rounded-lg"
            />
          </div>
          <div className="right" onClick={nextSlide}>
            R
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-4"> */}
        <div className=" flex items-center justify-center mt-4">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full mx-1 cursor-pointer ${
                index === currentIndex ? "bg-green-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        {/* </div> */}
      </div>
      <div className="">{slides[currentIndex].content}</div>
    </div>
  );
};

export default Onboarding;
