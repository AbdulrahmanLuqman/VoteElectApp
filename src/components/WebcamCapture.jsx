import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import PropTypes from "prop-types";

const WebcamCapture = ({ onCapture }) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    onCapture(imageSrc);
    console.log("captured!");
  }, [webcamRef, onCapture]);

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
        videoConstraints={{
          width: 1280,
          height: 720,
          facingMode: "user",
        }}
      />
      <button className=" bg-Green rounded-md px-1 py-1" onClick={capture}>
        Capture photo
      </button>
      {imgSrc && (
        <div className=" flex items-center flex-col gap-4">
          <img src={imgSrc} alt="Captured" />
          {/* <p>Captured!</p> */}
          {/* <button className=" w-full rounded-md py-2 bg-green-900">Save</button> */}
        </div>
      )}
    </>
  );
};
WebcamCapture.propTypes = {
  onCapture: PropTypes.func.isRequired,
};

export default WebcamCapture;
