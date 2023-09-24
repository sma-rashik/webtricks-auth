import React from "react";
import logo from "../../assets/webtricker-logo-black.jpg";
import { Link } from "react-router-dom";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <div className="mt-8 sm:mt-16 flex justify-center items-center">
      <div className="w-full sm:w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3">
        <div className="bg-white shadow-2xl rounded p-4">
          <div className="text-center">
            <img className="w-20 h-12 m-auto" src={logo} alt="" />
            <h1 className="text-2xl font-semibold mt-4">
              Welcome Back to WebTricker
            </h1>
          </div>

          <form className="mt-6">
            <div className="mb-4 text-left">
              <label className="text-gray-600 font-medium mb-1">Email</label>
              <input
                type="email"
                required
                id="Email"
                name="Email"
                className="w-full border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4 text-left">
              <label className=" text-gray-600 font-medium mb-1">
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
              className="bg-gray-950 text-white font-semibold py-3 px-6 rounded w-full"
            >
              Login
            </button>
          </form>

          <div className="my-6 flex justify-between items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-xs text-gray-700">Remember Me</span>
            </label>
            <a href="#" className="text-xs text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <div className="my-6 flex justify-between items-center">
            <Link to="/" className="text-gray-700">
              Go To Home
            </Link>
            <Link to="" className="text-xs text-blue-500 hover:underline">
              <h6 className="text-sm">
                Don't Have an account?{" "}
                <span className="text-pink-500">Sign Up</span>
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
