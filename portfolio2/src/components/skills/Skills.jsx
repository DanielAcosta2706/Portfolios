import { Frontend } from "./Frontend";
import { Backend } from "./Backend";

export const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section_Title">Skills</h2>
      <span className="section_Subtitle">My technical level</span>
      <div className="lg:cont mx-mbottm15 grid auto-cols-max grid-cols-1 justify-center gap-y-8 mdx:grid-cols-2 mdx:gap-x-12">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};
