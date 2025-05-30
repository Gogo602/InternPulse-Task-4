import React, { useState } from "react";
import logo from "../../assets/Icon/logo.svg";

import home from "../../assets/Icon/home.svg";
import arrowDown from "../../assets/Icon/arrow-down.svg";
import pages from "../../assets/Icon/pages.svg";
import applications from "../../assets/Icon/applications.svg";
import ecommerce from "../../assets/Icon/e commerce.svg";
import authentication from "../../assets/Icon/authentication.svg";
import arrowUp from "../../assets/Icon/arrow-up.svg";
import Vector from "../../assets/Icon/Vector.svg";
import profilePics from "../../assets/Icon/profilePics.svg";
import { NavLink } from "react-router-dom";

export default function Aside() {
  const [handleToggle, setHandleToggle] = useState(false);
  const [handleProifleToggle, setHandleProfileToggle] = useState(false);
  const [handleUserToggle, setHandleUserToggle] = useState(false);

  const handleToggleBtn = () => {
    setHandleToggle((tr) => !tr);
  };

  const handleProfileToggleBtn = () => {
    setHandleProfileToggle((tr) => !tr);
  };

  const handleUserToggleBtn = () => {
    setHandleUserToggle((tru) => !tru);
  };

  return (
    <div className="h-full flex flex-col ">
      <div className="flex-1 flex flex-col   p-6 border-r border-gray-200">
        <div className="mb-10 flex flex-col items-center p-5">
          <img src={logo} alt="Company Logo" className="h-8  w-auto" />
        </div>
        <nav className="flex flex-col gap-4">
          <div className="flex justify-between items-center p-2">
            <div className="grid grid-cols-2">
              <img src={home} />
              <a className="text-gray-700 hover:text-black font-medium">Home</a>
            </div>
            <img src={arrowDown} alt={arrowDown} />
          </div>

          {/* where i need to render the router link */}
          <div>
            <div
              className="flex justify-between items-center p-2 cursor-pointer"
              onClick={handleToggleBtn}
            >
              <div className="grid grid-cols-2">
                <img src={pages} alt={pages} />
                <a className="text-gray-700 hover:text-black font-medium">
                  Pages
                </a>
              </div>
              {handleToggle ? (
                <img src={arrowUp} />
              ) : (
                <img src={arrowDown} alt={arrowDown} />
              )}
            </div>
            <div className="ms-5">
              {handleToggle ? (
                <div>
                  <div
                    className="flex items-center justify-between p-3 cursor-pointer "
                    onClick={handleProfileToggleBtn}
                  >
                    <a>Profile</a>
                    {handleProifleToggle ? (
                      <img src={arrowDown} alt={arrowDown} />
                    ) : (
                      <img src={arrowUp} alt={arrowUp} />
                    )}
                  </div>
                  {handleProifleToggle ? (
                    <ul>
                      <li className="">
                        <div
                          onClick={handleUserToggleBtn}
                          className="flex items-center justify-between p-3 cursor-pointer"
                        >
                          <a>Users</a>
                          {handleUserToggle ? (
                            <img src={arrowDown} alt={arrowDown} />
                          ) : (
                            <img src={arrowUp} alt={arrowUp} />
                          )}
                        </div>
                        {handleUserToggle ? (
                          <ul className="ms-10 flex flex-col gap-3">
                            <li className="cursor-pointer">
                              <NavLink
                                to="/Reports"
                                className={({ isActive }) =>
                                  isActive ? "text-[#6E39CB]" : ""
                                }
                              >
                                Reports
                              </NavLink>
                            </li>
                            <li className="cursor-pointer">
                              <NavLink
                                to="/Users"
                                className={({ isActive }) =>
                                  isActive ? "text-[#6E39CB]" : ""
                                }
                              >
                                Users
                              </NavLink>
                            </li>
                          </ul>
                        ) : (
                          " "
                        )}
                      </li>
                    </ul>
                  ) : (
                    " "
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center p-2">
              <div className="grid grid-cols-2">
                <img src={applications} alt={applications} />
                <a
                  href="#"
                  className="text-gray-700 hover:text-black font-medium ms-[-20px]"
                >
                  Application
                </a>
              </div>
              <img src={arrowDown} alt={arrowDown} />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center p-2">
              <div className="grid grid-cols-2">
                <img src={ecommerce} alt={ecommerce} />
                <a
                  href="#"
                  className="text-gray-700 hover:text-black font-medium ms-[-24px]"
                >
                  Ecommerce
                </a>
              </div>
              <img src={arrowDown} />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center p-2">
              <div className="grid grid-cols-2">
                <img src={authentication} alt={authentication} />
                <a
                  href="#"
                  className="text-gray-700 hover:text-black font-medium ms-[-34px]"
                >
                  Authentication
                </a>
              </div>
              <img src={arrowDown} alt={arrowDown} />
            </div>
          </div>
        </nav>

        <div className="mt-auto bg-[#6E39CB] p-4 flex justify-between  items-center gap-2 rounded-md cursor-pointer">
          <img src={profilePics} alt="profile picture" className="w-10" />
          <div>
            <h2 className="text-white">Anita Cruz</h2>
            <p className="text-white text-sm">anita@commerce.com</p>
          </div>
          <img src={Vector} />
        </div>
      </div>
    </div>
  );
}
