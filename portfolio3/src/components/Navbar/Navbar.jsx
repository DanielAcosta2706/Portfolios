import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { NavbarItems } from "./NavbarItems";

export const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    if (activeBox.current && lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }
  };

  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);

  const activeCurrentLink = (e) => {
    lastActiveLink.current?.classList.remove("active");
    e.target.classList.add("active");
    lastActiveLink.current = e.target;

    activeBox.current.style.top = e.target.offsetTop + "px";
    activeBox.current.style.left = e.target.offsetLeft + "px";
    activeBox.current.style.width = e.target.offsetWidth + "px";
    activeBox.current.style.height = e.target.offsetHeight + "px";
  };

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      <NavbarItems
        lastActiveLink={lastActiveLink}
        activeCurrentLink={activeCurrentLink}
      />
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.prototype = {
  navOpen: PropTypes.bool.isRequired,
};
