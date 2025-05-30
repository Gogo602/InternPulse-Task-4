import React from "react";

export default function DashBoardHeader() {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        gap-4
        md:flex-col md:items-center md:justify-center md:gap-6
        lg:flex-row lg:items-center lg:justify-start lg:gap-10
        w-full
      "
      style={{ minHeight: "80px" }}
    >
      <h1 className="text-[#6E39CB] text-[25.63px] font-bold text-center lg:text-left">
        Users/Reports
      </h1>
      <div className="bg-white flex lg:flex justify-between items-center rounded-2xl border border-black p-2 w-full max-w-xs cursor-text">
        <input
          type="text"
          className="border-0 outline-none flex-grow px-2"
          placeholder="Search Anything here..."
          aria-label="Search input"
        />
        <span role="img" aria-label="search icon" className="ml-2 select-none">
          🔍
        </span>
      </div>
    </div>
  );
}
