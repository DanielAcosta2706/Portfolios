import { Link } from "react-router-dom";

export const Data = () => {
  return (
    <div className="flex flex-col md:col-start-2 md:col-end-5">
      <h1 className="mb-mbottm025 text-[1.8rem] mdx:text-h1Fontsize lgx:text-bigFontSize">
        DANIEL ACOSTA🖐
      </h1>
      <h3 className="relative mb-mbottm1 text-normal font-normal mdx:text-h3Fontsize lgx:text-h2Fontsize">
        Visual Designer
      </h3>
      <p className="mb-mbottm25 text-justify lgx:max-w-[400px]">
        I am creative designer based in Buenos Aires, and I am very passionate
        and dedicated to my work.
      </p>
      <Link to="#" className="button">
        Say Hello💬
      </Link>
    </div>
  );
};
