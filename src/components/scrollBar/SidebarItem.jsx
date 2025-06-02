import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

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
            <ExpandMoreIcon />
          </span>
        </div>
        <div
          className="content flex flex-col gap-2 pl-5 pt-2 text-xs pt-1 overflow-hidden"
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
      <>
        <a
          href={item.path || "#"}
          className="text-[#3A3541] items text-[1.2em] flex justify-between"
          onClick={() => {
              setOpen(!open)
          }}
        >
          <span className="flex items-center">
            <div
              className={
                open
                  ? "w-10 flex items-center pl-1 text-[#6E39CB]"
                  : "w-10 flex items-center pl-1"
              }
            >
              {item.icon}
            </div>
            <div className={open ? "text-[#6E39CB] text-sm" : "text-sm hidden sm:block"}>
              {item.title}
            </div>
          </span>
        </a>
      </>
    );
  }
}
