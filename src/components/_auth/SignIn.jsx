import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className=" bg-orange-600">
      Sign In
      {/*home */}
      <Link to="/home">
        <h1>Home</h1>
      </Link>
    </div>
  );
};

export default SignIn;
