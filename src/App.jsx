import { Route, Routes } from "react-router-dom";
import Onboarding from "./components/Onboarding";
import SignUp from "./components/_auth/SignUp";
import SignIn from "./components/_auth/SignIn";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" exact element={<Onboarding />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
