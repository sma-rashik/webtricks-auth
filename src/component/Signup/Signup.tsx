import React from "react";
import logo from "../../assets/webtricker-logo-black.jpg";

interface LoginProps {}

const SignUp: React.FC<LoginProps> = () => {
  return (
    <div className="mt-[60px] flex justify-center items-center h-screen">
      <div className="w-96  max-w-xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="hero h-full changebg">
            <div className="hero-content text-neutral-content">
              <div className="w-96 m-auto h-full flex flex-col justify-center text-center items-center">
                <form className="w-full h-full p-3 md:p-20 rounded shadow-2xl">
                  <div className="text-center m-5">
                    <img className="w-20 h-12 m-auto" src={logo} alt="" />
                  </div>
                  <p className="text-xl my-4"> Welcome to WebTricker</p>
                  <div className="mb-6">
                    <p className="text-left">Name</p>
                    <input
                      type="text"
                      required
                      id="Name"
                      name="Name"
                      className="w-full border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-6">
                    <p className="text-left">Email</p>
                    <input
                      type="email"
                      required
                      id="Email"
                      name="Email"
                      className="w-full border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                      placeholder="Your Email"
                    />
                  </div>

                  <div className="mb-6 relative">
                    <p className="text-left">Password</p>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      className="w-full border rounded py-3 px-4 text-gray-95000 leading-tight focus:outline-none focus:border-blue-500"
                      placeholder="Your password"
                    />
                  </div>

                  <button className="bg-gray-950 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded w-full">
                    Login
                  </button>
                  <div className="my-6 ">
                    <a
                      href="#"
                      className="text-xs text-blue-500 hover:underline"
                    >
                      Already Have an account?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
