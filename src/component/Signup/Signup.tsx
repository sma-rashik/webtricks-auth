import React from "react";
import Lottie from "lottie-react";
import data from "./signup.json";
import { Link } from "react-router-dom";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  return (
    <div className="mt-[60px] w-[96%] md:w-[90%] mx-auto pt-3">
      <div className="grid grid-cols-1 md:grid-cols-2 flex-col-reverse">
        <div className="hero h-full changebg">
          <div className="hero-content text-neutral-content">
            <div className="">
              <form className="w-full h-full bg-gradient-to-b from-[#134B67] to-[#101E41] p-3 md:p-20 rounded shadow-2xl">
                <div className="flex justify-between">
                  <h2 className="text-2xl font-semibold mb-4 uppercase text-blue-500">
                    Sign Up
                  </h2>
                  <Link to={"/login"}>
                    <h2 className="text-2xl font-semibold mb-4 text-white uppercase hover:text-blue-500">
                      Log in
                    </h2>
                  </Link>
                </div>
                {/* name */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="text-gray-200 font-medium mb-3"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                    placeholder="Your Name"
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-200 font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="Email"
                    name="Email"
                    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                {/* password */}
                <div className="mb-4 relative">
                  <label
                    htmlFor="password"
                    className="block text-gray-200 font-medium mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                    placeholder="Your password"
                  />
                  <p className="absolute top-8 right-5 font-bold cursor-pointer hover:text-blue-500">
                    show
                  </p>
                </div>

                {/* Add other input fields */}
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="changebg">
          <Lottie
            loop={true}
            autoplay={true}
            animationData={data}
            className="w-full h-[40vh] md:h-[94vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
