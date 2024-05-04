import React, { useRef } from "react";
import Webcam from "react-webcam";

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

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
      <button onClick={capture}>Capture photo</button>
      {imgSrc && <img src={imgSrc} alt="Captured" />}
    </>
  );
};

export default WebcamCapture;
