import React from "react";
import DashBoardHeader from "../Report/DashBoardHeader";
import UsersInfo from "./UserInfo/UsersInfo";
import AboutMe from "./AboutMe/AboutMe";

export default function Users() {
  
  return (
    <main className="p-6 flex flex-col gap-6 overflow-auto lg:ml-[280px]">
      <header className="h-20 flex items-center">
        <DashBoardHeader />
      </header>
      <section className="m-10">
        <UsersInfo  />
        <AboutMe  />
      </section>
    </main>
  );
}
