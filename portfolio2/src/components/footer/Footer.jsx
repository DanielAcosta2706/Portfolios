import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      className="border border-b-0 border-solid border-black border-opacity-10 bg-containerColor"
      id="footer"
    >
      <div className="lg:cont mx-mbottm15 grid px-0 pb-24 pt-8">
        <h1 className="mb-mbottm2 text-center text-h1Fontsize text-titleColor">
          Daniel
        </h1>
        <ul className="mb-mbottm2 flex justify-center gap-x-6">
          <li>
            <Link to="about" className="footer_Icon">
              About
            </Link>
          </li>
          <li>
            <Link to="portfolio" className="footer_Icon">
              Projects
            </Link>
          </li>
          <li>
            <Link to="testimonial" className="footer_Icon">
              Testimonial
            </Link>
          </li>
        </ul>
        <div className="flex justify-center gap-x-5">
          <Link to="http://www.facebook.com/" className="footer_Social">
            <i className="bx bxl-facebook"></i>
          </Link>
          <Link to="http://www.instagram.com/" className="footer_Social">
            <i className="bx bxl-instagram"></i>
          </Link>
          <Link to="http://www.twitter.com/" className="footer_Social">
            <i className="bx bxl-twitter"></i>
          </Link>
        </div>
        <span className="mt-16 block text-center text-smallerFontSize text-titleColor">
          &#169; Daniel Acosta. All rigths reserved
        </span>
      </div>
    </footer>
  );
};
