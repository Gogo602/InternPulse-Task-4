import { SideBarData } from "./SideBarData";
import { FaCog } from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import logo from './logo.png'
import user from './user.png'


const SideBar = () => {


  return (
    <div
      className="hidden sm:w-60 h-screen sm:flex flex-col items-center
        py-5 sm:py-10 gap-10 overflow-y-scroll"
        style={{scrollbarWidth: 'none' }}
    >
      <div className="w-15 sm:w-20">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col space-y-7 self-start sm:self-center w-[30%] sm:w-[80%]">
        {SideBarData.map((item, key) => (
          <SidebarItem item={item} key={key} hidden={'hidden'}/>
        ))}
      </div>
      <div className="hidden sm:flex items text-[#3A3541] bg-[#6E39CB] text-[1.2em] w-[80%] rounded-md">
        <div className="basis-[90%] w-full py-2 gap-2 flex rounded-md items-center justify-center">
          <div className="">
          <img width={35} src={user} alt="" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-[12px] text-white">Tofunmi transpose</h2>
            <p className="text-[10px] font-thin text-white">tofexzyno@gmail.con</p>
          </div>
        </div>
        <div className="basis-[10%] flex justify-center text-white">
          <FaCog viewBox="-5 -5 30 30"/>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
