import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header
      id="header"
      className="fixed inset-x-0 bottom-0 z-40 m-auto w-full md:sticky md:left-0 md:top-0 "
    >
      <nav className="lg:cont mx-mbottm15 flex h-12 items-center justify-between bg-bodyColor md:h-navHeight">
        <Link to="" className="social_Icon font-medium">
          DANIEL
        </Link>
        <div className={menu ? "open_Menu" : "close_Menu"}>
          <ul className="grid gap-4 smx:grid smx:grid-cols-3 smx:gap-8 md:flex md:justify-end">
            <li className="">
              <Link to="#" className="header_Link">
                <i className="uil uil-estate header_Icon"></i>
                Home
              </Link>
            </li>
            <li className="">
              <Link to="#" className="header_Link">
                <i className="uil uil-user header_Icon"></i>
                About
              </Link>
            </li>
            <li className="">
              <Link to="#" className="header_Link">
                <i className="uil uil-file-alt header_Icon"></i>
                Skills
              </Link>
            </li>
            <li className="">
              <Link to="#" className="header_Link">
                <i className="uil uil-briefcase-alt header_Icon"></i>
                Services
              </Link>
            </li>
            <li className="">
              <Link to="#" className="header_Link">
                <i className="uil uil-scenery header_Icon"></i>
                Portfolio
              </Link>
            </li>
            <li className="">
              <Link to="#" className="header_Link">
                <i className="uil uil-message header_Icon"></i>
                Contact
              </Link>
            </li>
          </ul>
          <i
            className="uil uil-times header_Icon social_Icon absolute bottom-2 right-[1.5rem]"
            onClick={() => setMenu(!menu)}
          ></i>
        </div>
        <div className="" onClick={() => setMenu(!menu)}>
          <i className="uil uil-apps header_Icon social_Icon"></i>
        </div>
      </nav>
    </header>
  );
};
