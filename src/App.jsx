import { Route, Routes } from "react-router-dom";
import Onboarding from "./components/Onboarding";
import SignUp from "./components/_auth/SignUp";
import SignIn from "./components/_auth/SignIn";
import Home from "./components/Home";
import WebcamCapture from "./components/WebcamCapture";
import Notify from "./components/Notifications";
import Vote from "./components/Vote";
import Profile from "./components/Profile";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" exact element={<Onboarding />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/webcam-capture" element={<WebcamCapture />} />
      <Route path="/notifications" element={<Notify />} />
      <Route path="/vote" element={<Vote />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
