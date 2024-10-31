import { Link } from "react-router-dom";

export const Social = () => {
  return (
    <div className="flex flex-col gap-5">
      <Link to="http://www.instagram.com/" className="social_Icon">
        <i className="uil uil-instagram"></i>
      </Link>
      <Link to="http://www.dribbble.com/" className="social_Icon">
        <i className="uil uil-dribbble"></i>
      </Link>
      <Link to="http://www.github.com/" className="social_Icon">
        <i className="uil uil-github-alt"></i>
      </Link>
    </div>
  );
};
