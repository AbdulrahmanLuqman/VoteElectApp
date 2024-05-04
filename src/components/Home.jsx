// import Webcam from "react-webcam";
import WebcamCapture from "./WebcamCapture";
import { MdLocationPin } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";

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
        <IoMdNotifications className=" text-white text-3xl " />
      </div>
      {/*  */}
      <WebcamCapture />
    </div>
  );
};

export default Home;
