import { Route, Routes } from "react-router-dom";
import Onboarding from "./components/Onboarding";
import SignUp from "./components/_auth/SignUp";
import SignIn from "./components/_auth/SignIn";
import Home from "./components/Home";
import WebcamCapture from "./components/WebcamCapture";
// import LiveResults from "./components/LiveResults";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" exact element={<Onboarding />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/webcam-capture" element={<WebcamCapture />} />
      {/* <Route path="/liveresult" element={<LiveResults />} /> */}
    </Routes>
  );
}

export default App;
