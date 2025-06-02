import React from "react";

export default function AboutMe() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white mt-10 shadow p-10 rounded-md">
      <h1 className="text-[18px]">About Me</h1>
      <span className="text-[18px] text-[#89868D]">Mandatory Information</span>
      <form action="" onSubmit={handleSubmit} className="pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col gap-2">
            <label>First Name</label>
            <input
              type="text"
              className="  h-[46px]  border-0 rounded-md p-7  bg-[#DBDCDE]"
              placeholder="eg.Afiyah"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Last Name</label>
            <input
              type="text"
              className="  h-[46px]  border-0 rounded-md p-7  bg-[#DBDCDE]"
              placeholder="eg. Inaolaji"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Company</label>
            <input
              type="text"
              className=" h-[46px]  border bg-[#DBDCDE] p-7 rounded-md border-0"
              placeholder="eg. TeamUXD"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Email Address</label>
            <input
              type="email"
              className="  h-[46px]  border-0 rounded-md  bg-[#DBDCDE] p-7"
              placeholder="eg. Team@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Password</label>
            <input
              type="password"
              className="h-[46px]  border-0 p-7 bg-[#DBDCDE]"
              placeholder="mx23546b"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label>Repeat Password </label>
            <input
              type="password"
              className=" h-[46px] border-0 rounded-md p-7 bg-[#DBDCDE] "
              placeholder="mx23546b"
            />
          </div>
        </div>
        <div className="flex justify-end mt-5 ">
          <button className="bg-[#6E39CB] text-white w-[100px] h-[46px] rounded-md cursor-pointer">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
