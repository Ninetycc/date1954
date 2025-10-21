import NavMenu from "./NavMenu.jsx";
import { useState } from "react";
import Sidebar from "./Sidebar.jsx";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="container">
      <div className="flex py-5 px-3">
        <div className="flex items-center pt-3 text-2xl">
          <a href="https://dmso.cc/">
            <span className="font-poppins font-semibold cursor-pointer hover:text-white hover:bg-yellow-700">
              DMSO.cc
            </span>
          </a>
        </div>
        <div className="flex-grow flex items-center z-20">
          <NavMenu />
        </div>

        <div className="flex items-center text-xl">
          <a href="./site-map">
            <span className="body-font font-poppins text-xl cursor-pointer hover:text-white hover:bg-lime-900">
              INDEX
            </span>
          </a>
          &nbsp;
          <button
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="sidebar"
            aria-label="Open Menu"
          >
            <span className="body-font font-poppins text-xl cursor-pointer hover:text-white hover:bg-lime-900">
              MENU
            </span>
          </button>
          <Sidebar open={open} setOpen={setOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
