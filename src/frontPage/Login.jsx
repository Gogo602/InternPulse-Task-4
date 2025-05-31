import React from 'react'
import "/images/woman 1.png";
import google from "./Googlee.png";
import facebook from './Facebook.png';


const Login = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-screen h-screen  m-0 p-0">
      <div className="w-full h-screen grid place-items-center ">
        <form className="flex flex-col gap-2 w-60 lg:w-[50%] max-w-90">
          <div className="mb-1">
            <h2 className="font-semibold text-[25px] md:text-3xl ">Login</h2>
            <p className="text-[14px] text-gray-500">
              How do I get started?
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#3A3541] text-[14px]" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter your email"
              className="flex items-center h-[46px] w-full border-2 rounded-md border-[#DBDCDE] bg-[#F4F5F9] px-2 py-2 m-0  text-[14px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-[#3A3541] text-[14px]"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="flex items-center h-[46px] w-full border-2 rounded-md border-[#DBDCDE] bg-[#F4F5F9] px-2 py-2 m-0  text-[14px]"
            />
          </div>

          <a href="#" className="self-end text-[14px] text-[#6E39CB]">
            Forgot password
          </a>
          <button
            type="submit"
            className="bg-[#6E39CB] rounded-md text-white text-[16px] py-2 mb-2 h-[46px]"
          >
            Sign in
          </button>
          <button className="flex items-center justify-center gap-2 border-2 border-gray-200 rounded-full text-[16px] py-2 mb-2 h-[46px]">
            <img src={google} alt="" />
            <a href="google.com">Sign in with Google</a>
          </button>
          <button className="flex items-center justify-center gap-2 border-2 border-gray-200 rounded-full text-[16px] py-2 mb-2 h-[46px]">
            <img src={facebook} alt="" />
            <a href="m.facebook.com">Sign in with Facebook</a>
          </button>
          <p className="self-center text-[13px] text-gray-500">
            Don't have an account.{" "}
            <a href="./SignUp" className="text-[13px] text-[#6E39CB]">
              Sign up
            </a>
          </p>
        </form>
      </div>
      <div className="w-full h-screen grid place-items-center p-[2px]">
        <div className="bg-purple-700 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-white font-semibold text-xl md:text-3xl lg:text-4xl md:mb-[-20px] lg:mb-[-25px]">
            Very good works are <br />
            waiting for you <br />
            Sign up Now
          </h1>
          <img
            className="w-[320px] md:w-[450px] lg:w-[500px]"
            src="/images/woman 1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;