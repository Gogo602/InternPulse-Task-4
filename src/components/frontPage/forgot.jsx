import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "/images/woman 1.png";
const Forgot = () => {
  return (
    <div className="w-screen h-screen grid place-items-center bg-[#F4F5F9]">
      <form
        action={console.log("mr")}
        className="flex flex-col items-center justify-center gap-2 w-100 max-w-[90%] sm:w-[730px] sm:h-[515px] h-70 rounded-2xl bg-white"
        style={{ boxShadow: "4 4 9 0 #black" }}
      >
        <div>
          <h2 className="font-semibold text-[25px] text-center">
            Forgot password?
          </h2>
          <p className="text-[14px] text-gray-500">
            No worries, we'll send you reset instruction.
          </p>
        </div>
        <div className="w-330px">
          <label className="text-[#3A3541] text-[14px]" htmlFor="email">
            Email
          </label>{" "}
          <br />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter your email"
            className="w-[330px] h-[46px] border-2 rounded-md border-[#DBDCDE] bg-[#F4F5F9] px-2 pb-1 p-1 text-[14px]"
          />{" "}
          <br />
        </div>
        <a href="#" className="self-end text-xs text-purple-700"></a>
        <button
          type="submit"
          className="bg-[#6E39CB] rounded-md text-white text-[16px] py-2 w-[330px] h-[46px]"
        >
          Reset Password
        </button>
        <a href="./SignUp" className="text-[14px] text-[#6E39CB]">
          Back to login
        </a>
      </form>
    </div>
  );
};

export default Forgot;
