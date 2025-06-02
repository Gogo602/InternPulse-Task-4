import "/images/woman 1.png";
const SignUp = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-screen h-screen  m-0 p-0">
      <div className="w-full h-screen grid place-items-center ">
        <form className="flex flex-col gap-4 min-w-60 lg:w-[50%] max-w-90">
          <div className="mb-0">
            <h2 className="font-semibold text-[25px] md:text-3xl ">Sign up</h2>
            <p className="text-[14px] text-gray-500">
              Start your 30-day free trial
            </p>
          </div>
          <div className="flex">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="flex items-center h-[46px] w-full border-2 rounded-md border-[#DBDCDE] bg-[#F4F5F9] px-2 py-2 m-0  text-[14px]"
            />{" "}
            <br />
          </div>
          <div className="flex">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="flex items-center h-[46px] w-full border-2 rounded-md border-[#DBDCDE] bg-[#F4F5F9] px-2 py-2 m-0  text-[14px]"
            />{" "}
            <br />
          </div>
          <div className="flex">
            <input
              type="password"
              placeholder="Password"
              className="flex items-center h-[46px] w-full border-2 rounded-md border-[#DBDCDE] bg-[#F4F5F9] px-2 py-2 m-0  text-[14px]"
            />
          </div>
          <p className="text-[13px] text-gray-500">
            You are agreeing to the
            <a
              href="#"
              className="self-end text-[13px]  text-[#6E39CB] text-[13px]"
            >
              {" "}
              Terms of Services{" "}
            </a>{" "}
            <br />
            and
            <a
              href="#"
              className="self-end text-[13px] text-purple-700 text-[13px]"
            >
              {" "}
              Privacy Policy
            </a>
          </p>
          <button
            type="submit"
            className="bg-[#6E39CB] rounded-md text-white text-[16px] py-2 h-[46px]"
          >
            Get started
          </button>
          <p className="text-[13px] text-gray-500">
            Already a member?{" "}
            <a
              href="/SignIn"
              className="self-end text-[13px] text-purple-700 text-[13px]"
            >
              Sign in
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

export default SignUp;
