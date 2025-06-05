import { SideBarData } from "./SideBarData";
import { BurgerContext } from "../../App";
import { FaCog, FaBars } from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import logo from "./logo.png";
import user from "./user.png";
import { useState, useContext } from "react";

const SideBar = () => {
  const [burger, toggleSidebar] = useContext(BurgerContext);
  const collapse = burger ? "flex" : "hidden";
  return (
    <>
      <div
        className="fixed right-4 top-2 sm:hidden" //what i changed
        onClick={() => {
          toggleSidebar();
          console.log(burger);
        }}
      >
        <FaBars />
      </div>
      <div
        className={`bg-white w-60 h-screen ${collapse} flex-col items-center py-5 sm:py-10 gap-10 overflow-y-scroll`}
        style={{ scrollbarWidth: "none" }}
      >
        <div className="w-20">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-col space-y-7 self-center w-[80%]">
          {SideBarData.map((item, key) => (
            <SidebarItem state={[burger, toggleSidebar]} item={item} key={key} />
          ))}
        </div>
        <div className="sm:flex items-center text-[#3A3541] bg-[#6E39CB] text-[1em] w-[80%] h-15 rounded-md">
          <div className="basis-[90%] w-full py-2 gap-2 flex rounded-md items-center justify-center">
            <div className="">
              <img width={35} src={user} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[12px] text-white">Tofunmi transpose</h2>
              <p className="text-[10px] font-thin text-white">
                tofexzyno@gmail.con
              </p>
            </div>
          </div>
          <div className="basis-[10%] flex justify-center text-white">
            <FaCog viewBox="-5 -5 30 30" />
          </div>
        </div>
      </div>
    </>
  );
};
export default SideBar;
