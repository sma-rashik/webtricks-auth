import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded m-2">
        <Link to="/login" className="text-white no-underline">
          Login
        </Link>
      </button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded m-2">
        <Link to="/signup" className="text-white no-underline">
          Signup
        </Link>
      </button>
    </div>
  );
};

export default Home;
