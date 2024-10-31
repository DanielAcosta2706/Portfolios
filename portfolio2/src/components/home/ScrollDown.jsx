import { Link } from "react-router-dom";

export const ScrollDown = () => {
  return (
    <div className="ml-28 hidden md:inline-block lgx:ml-36">
      <Link to="#" className="button--flex social_Icon text-base font-medium">
        <img src="mouse.jpeg" alt="Mouse Image" className="h-10 w-6" />
        <span className="mx-1">Scroll Down</span>
        <i className="uil uil-arrow-down"></i>
      </Link>
    </div>
  );
};
