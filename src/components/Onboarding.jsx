import { useState } from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
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
            <div className="mb-4 flex flex-col items-center">
              <h1 className=" font-bold text-2xl">See live Election results</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, soluta?
              </p>
            </div>
            <div className="w-full mt-8 flex flex-col items-center">
              <button className="w-full bg-green-500 py-2 font-bold text-white rounded-lg">
                <Link to="/signup">Create account</Link>
              </button>
              <h1 className=" mt-8">
                Already have an account?
                <Link className="text-green-400" to="/signin">
                  Log in
                </Link>
              </h1>
            </div>
          </div>
        </>
      ),
    },
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleDragStart = (event) => {
    setDragStartX(event.clientX);
  };

  const handleDragEnd = (event) => {
    const dragEndX = event.clientX;
    const deltaX = dragEndX - dragStartX;

    if (deltaX > 50) {
      prevSlide();
    } else if (deltaX < -50) {
      nextSlide();
    }
  };

  const nextSlide = () => {
    currentIndex < slides.length - 1
      ? setCurrentIndex((prevIndex) => prevIndex + 1)
      : null;
  };

  const prevSlide = () => {
    currentIndex
      ? setCurrentIndex((prevIndex) => prevIndex - 1)
      : setCurrentIndex(0);
  };

  return (
    <div
      className=" flex flex-col items-center gap-8 justify-center bg-green-50  h-screen w-full"
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      {...handlers}
    >
      <div
        className={`absolute top-8 text-green-500 right-8 ${
          currentIndex === 4 ? "hidden" : "block"
        }`}
        onClick={() => setCurrentIndex(4)}
      >
        Skip
      </div>
      <div className="relative">
        <div className="flex items-center ">
          {/* <div className=" text-4xl cursor-pointer" onClick={prevSlide}>
            {"<"}
          </div> */}
          <div className="w-[300px] sm:w-[500px]">
            <img
              src={slides[currentIndex].image}
              alt=""
              className="w-full h-[300px] rounded-lg transition duration-500"
            />
          </div>
          {/* <div className=" text-4xl cursor-pointer" onClick={nextSlide}>
            {">"}
          </div> */}
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
