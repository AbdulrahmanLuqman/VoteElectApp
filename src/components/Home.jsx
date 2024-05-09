// import Webcam from "react-webcam";
// import WebcamCapture from "./WebcamCapture";
import { MdLocationPin } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import wavingFlags from "../assets/images/group-of-people-waving-flags.jpg"
import BottomNavLinks from "./BottomNavLinks"

const Home = () => {
  // const = [{
  //     // id:1,fullName:""
  // }]
  return (
    <div className=" bg-green-100 h-screen ">
      {/* TOP */}
      <div className=" flex items-center justify-between py-6  px-4">
        <div className=" flex gap-4 ">
          <div>
            <img
              src="/flower2.jpg"
              alt="profile-pics"
              //   width={60}
              //   height={60}
              className=" w-14 h-14 rounded-full"
            />
          </div>
          {/* location */}
          <div>
            <div>
              <h1>Hello, Username</h1>
            </div>
            <div className=" flex items-center  ">
              <MdLocationPin className=" text-green-500" />
              <h1 className=" text-green-500">Lagos, Nigeria.</h1>
            </div>
          </div>
        </div>
        <Link to="/notifications">
          <IoMdNotifications className=" text-black text-3xl " />
        </Link>
      </div>
      <div className="relative h-[150px]">
        <img className="absolute h-full w-full top-0" src={wavingFlags} alt="group of people waving flags" />
        <div className="absolute top-0 bg-black opacity-50 h-full w-full"></div>
        <div className="absolute top-0 h-full w-full flex items-center justify-center">
          <p className="text-white text-[1.5rem] font-bold">EXERCISE YOUR RIGHT TO VOTE</p>
        </div>
      </div>
      <div className="w-[90%] bg-white text-center p-4 rounded-md shadow-md mx-auto relative bottom-8">
        <p className="text-[1.1rem] font-semibold">See <Link className="text-green-500">Ongoing</Link> or <Link className="text-green-500">Upcoming</Link> Election</p>
      </div>
      <div className="w-[90%] bg-white p-4 rounded-md shadow-md mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h3>Presidential Election</h3>
            <p className="text-green-500">See Results</p>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col items-center">
              <img class="rounded-[50%]" src="https://via.placeholder.com/50" />
              <p className="text-gray-400">45%</p>
            </div>
            <div className="flex flex-col items-center">
              <img class="rounded-[50%]" src="https://via.placeholder.com/50" />
              <p className="text-gray-400">25%</p>
            </div>
          </div>
        </div>
      </div>
      {/* News */}
      <div className="space-y-2 p-4">
        <h2 className="text-green-500 text-[1.1rem]">Trending New</h2>
        <div className="flex gap-4">
          <img width={100} height={100} class="rounded-xl h-full" src="https://via.placeholder.com/50" />
          <div>
            <h2 className="font-bold text-[1.1rem]">Voting Unit in Ilorin has stopped</h2>
            <p className="text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, iure.</p>
          </div>
        </div>
      </div>
      <BottomNavLinks />
      {/*  */}
    </div>
  );
};

export default Home;
