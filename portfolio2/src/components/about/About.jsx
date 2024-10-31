import { Info } from "./Info";
import CV from "../../assets/CVDanielAcosta.pdf";

export const About = () => {
  return (
    <section className="section" id="about">
      <h2 className="section_Title">About Me</h2>
      <span className="section_Subtitle">My introduction</span>
      <div className="lg:cont mx-mbottm15 grid grid-cols-1 items-center gap-y-8 md:grid-cols-2">
        <img
          src="homeroAbout.jpg"
          alt="About Image"
          className="h-[200px] w-[200px] justify-self-center rounded-3xl md:h-[300px] md:w-[300px] lgx:h-[400px] lgx:w-[400px]"
        />
        <div className="grid justify-items-center">
          <Info />
          <p className="mb-mbottm2 text-center">
            Frontend developer, I create web pages with UI / UX user interfaces,
            I have years of experience and many clients are happy with the
            projects carried out.
          </p>
          <a
            download="CV Daniel Acosta.pdf"
            href={CV}
            className="button w-[180px] md:w-[200px]"
          >
            Download CV📃
          </a>
        </div>
      </div>
    </section>
  );
};
