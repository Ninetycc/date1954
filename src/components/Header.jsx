import NavMenu from "./NavMenu.jsx";
import { useState } from "react";
import Sidebar from "./Sidebar.jsx";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="container">
      <div className="w-screen  flex">
        <div className="flex  text-2xl">
          <a href="./">
            <span className="font-poppins cursor-pointer hover:text-white hover:bg-black">1954.date</span>
          </a>
        </div>
        <div className="grow flex ">
          <NavMenu />
        </div>

        <div className="flex items-center text-xl">
          <a href="./site-map">
            <span className="body-font flex font-poppins  w-full md:w-fit sm:w-fit text-xl cursor-pointer hover:text-white hover:bg-lime-900">
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
            <span className="body-font flex font-poppins  text-xl cursor-pointer hover:text-white hover:bg-lime-900">
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
