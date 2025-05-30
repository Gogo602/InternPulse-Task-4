import Aside from "./components/Aside/Aside";
import Reports from "./components/Report/Reports";
import Users from "./components/Users/Users";
import logo from "../src/assets/Icon/logo.svg";
import burgerMenu from "./assets/Icon/burger-menu.svg";
import xMenu from "./assets/Icon/x-symbol.svg";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [handleHamburgerMenu, setHandleHamburgerMenu] = useState(false);
  const handleHamburgerMenuBtn = () => {
    setHandleHamburgerMenu((tru) => !tru);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 relative  " role="main">
        <nav className="flex  lg:hidden justify-between p-8 bg-white  shadow-lg fixed top-0 left-0 w-full z-50">
          <div>
            <img src={logo} alt="Company Logo" className="h-8 w-auto" />
          </div>
          <div onClick={handleHamburgerMenuBtn}>
            <img
              src={handleHamburgerMenu ? xMenu : burgerMenu}
              className="h-10 w-10"
              alt="x-menu"
            />
          </div>
        </nav>
        {handleHamburgerMenu && (
          <aside
            className=" absolute  top-0 left-0 w-full min-h-screen bg-white z-40 shadow-lg p-4 lg:hidden"
            aria-label="Sidebar navigation"
          >
            <Aside />
          </aside>
        )}

        <aside
          className="hidden
            w-full bg-white left-0 lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[280px] lg:block  lg:bg-white shadow z-10"
          aria-label="Sidebar navigation"
        >
          <Aside />
        </aside>
        <Routes>
          <Route path="/" element={<Reports />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Users" element={<Users />} />
          <Route
            path="*"
            element={
              <div className="p-6 flex flex-col gap-6 overflow-auto lg:ml-[280px]">
                <h1 className="text-center text-3xl font-extrabold">
                  404 PAGE NOT FOUND ‼️
                </h1>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

