import React, { useState } from "react";

export default function UsersInfo() {
  const [activeIndex, setActiveIndex] = useState(0);

  const label = ["User Info", "Address", "Socials", "Profile"];
  return (
    <div className="p-10 grid grid-cols-1 lg:grid-cols-4 bg-white shadow items-center justify-center">
      {label.map((user, index) => {
        return (
          <div
            className="flex justify-center items-center flex-col gap-y-5 cursor-pointer"
            key={ index}
            onClick={() => setActiveIndex(index)}
          >
            <button
              className={`rounded-full h-12 w-12  transition-colors duration-300 ${
                activeIndex === index ? "bg-[#6E39CB]" : "bg-[#DECCFE]"
              }`}
            ></button>
            <span
              className={`transition-colors duration-300 text-[16px] ${
                activeIndex === index ? "text-[#6E39CB]" : "text-[#89868D]"
              }`}
            >
              {user}
            </span>
          </div>
        );
      })}
    </div>
  );
}
