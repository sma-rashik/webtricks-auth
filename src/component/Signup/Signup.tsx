import React from "react";
import logo from "../../assets/webtricker-logo-black.jpg";
import { Link } from "react-router-dom";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  return (
    <div className="mt-8 sm:mt-16 flex justify-center items-center">
      <div className="w-full sm:w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3">
        <div className="bg-white shadow-2xl rounde-2xl p-4">
          <div className="text-center">
            <img className="w-20 h-12 m-auto" src={logo} alt="" />
            <h1 className="text-xl font-semibold mt-4">
              Welcome to WebTricker
            </h1>
          </div>

          <form className="mt-6">
            <div className="mb-4 text-left">
              <label className="text-gray-600 font-medium mb-1 block">
                Name
              </label>
              <input
                type="text"
                required
                id="Name"
                name="Name"
                className="w-full border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4 text-left">
              <label className="text-gray-600 font-medium mb-1 block">
                Email
              </label>
              <input
                type="email"
                required
                id="Email"
                name="Email"
                className="w-full border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4 text-left relative">
              <label className="text-gray-600 font-medium mb-1 block">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                placeholder="Your password"
              />
            </div>

            <button
              type="submit"
              className="bg-gray-950  text-white font-semibold py-3 px-6 rounded w-full"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
