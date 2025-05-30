import React from "react";
import {HashRouter as Router, Routes, Route, Outlet} from 'react-router-dom'
import Chart from "./pages/Chart";
import Notification from "./pages/Notification";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import SideBar from "./component/SideBar";
import Header from "./component/Header";


const Layout= ()=>{
  return(
    <div>
      <div className="flex w-full">
        <div className=" h-screen w-[20%] flex justify-center items-center"><SideBar /></div>
        <div className="flex bg-[#F4F5F9] flex-col gap-10 w-[80%]">
          
          <div className=""><Header /></div>
          <div className="flex-grow px-8"> <Outlet /></div>
        </div>

      </div>

    </div>
  )
}
function App() {

  return (
    <div className="lato">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
           <Route path="home" element={<Home />} />
           <Route  path='/chart' element={<Chart />}/>
           <Route path='/notification' element={<Notification />}/>
           <Route path='/chat' element={<Chat />}/>

          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
