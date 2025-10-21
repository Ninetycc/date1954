import NavMenu from "./NavMenu.jsx";
import { useState } from "react";
import Sidebar from "./Sidebar.jsx";

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <footer className="container">
      <div className="flex py-5 px-3">
        <div className="flex items-center pt-3 text-2xl">
          <a href="./">
            <span className="font-paint cursor-pointer hover:text-white hover:bg-lime-900 hover:text-4xl">1954.date</span>
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
    </footer>
  );
};

export default Footer;
