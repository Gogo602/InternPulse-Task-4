import { useState } from "react";
import { FaExpand } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; // <-- ADD THIS IMPORT

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // <-- ADD THIS LINE to get current location for active state

  // Determine active state based on current path
  const isActive = location.pathname === item.path; // <-- NEW: Check if current path matches item.path

  if (item.children) {
    return (
      <div>
        <div
          className={
            open
              ? "items text-[#3A3541] text-[1.2em] flex h-10 sm:justify-between sm:bg-[#DECCFE] py-1 rounded-md"
              : "items text-[#3A3541] text-[1.2em] h-10 flex sm:justify-between"
          }
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span className="flex items-center space-x-[-10px] sm:space-x-0">
            <div
              className={
                open
                  ? "w-10 flex items-center pl-1 text-[#6E39CB]"
                  : "w-10 flex items-center pl-1"
              }
            >
              {item.icon}
            </div>
            <div className={open ? "text-[#6E39CB] text-sm block" : "text-sm hidden sm:block"}>
              {item.title}
            </div>
          </span>
          <span
            className={
              open ? "text-[#6E39CB] flex items-center hidden" : "flex items-center"
            }
            style={{ rotate: open ? "180deg" : "0deg" }}
          >
            <FaExpand />
          </span>
        </div>
        <div
          className="content flex flex-col gap-2 pl-5 text-xs pt-1 overflow-hidden"
          style={{ height: open ? "100%" : "0" }}
        >
          {item.children.map((child, key) => (
            <SidebarItem key={key} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      // <-- REPLACED <a> WITH <Link> HERE
      <Link
        to={item.path || "#"} // Use 'to' prop for Link
        // Apply active/hover styles directly to the Link component
        className={`
          text-[1.2em] flex justify-between items-center h-10 w-full rounded-md no-underline transition-colors duration-200
          ${isActive ? 'bg-[#6E39CB] text-white' : 'text-[#3A3541] hover:bg-gray-200'}
        `}
        // REMOVED onClick={() => { setOpen(!open) }} from here,
        // as setOpen(!open) on a non-expandable item doesn't make sense if it's a navigation link.
        // If this setOpen was for some other visual feedback (like a momentary highlight),
        // you might need a different state management or CSS. For navigation, it's unnecessary.
      >
        <span className="flex items-center">
          <div
            className={
              isActive // <-- USE isActive for styling active link
                ? "w-10 flex items-center pl-1 text-white" // Active icon color
                : "w-10 flex items-center pl-1" // Default icon color (inherits from Link's text-[#3A3541])
            }
          >
            {item.icon}
          </div>
          <div className={isActive ? "text-white text-sm block" : "text-sm hidden sm:block"}> {/* <-- USE isActive for styling active link text */}
            {item.title}
          </div>
        </span>
      </Link>
    );
  }
}