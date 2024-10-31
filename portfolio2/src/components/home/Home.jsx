import { Data } from "./Data";
import { Social } from "./Social";
import { ScrollDown } from "./ScrollDown";

export const Home = () => {
  return (
    <section className="section" id="home">
      <div className="lg:cont mx-mbottm15 grid gap-y-16">
        <div className="flex flex-wrap items-center md:grid md:grid-cols-6 md:gap-8">
          <Social />
          <div className="image__profile mb-mbottm05 ml-10 h-40 w-40 bg-[url('homeroHome.jpg')] bg-cover bg-bottom bg-no-repeat shadow-boxShadowCustom sm:ml-20 sm:h-48 sm:w-48 mdx:ml-32 mdx:h-56 mdx:w-56 md:order-1 md:col-start-5 md:col-end-7 md:ml-0 md:h-64 md:w-64 md:justify-self-center lgx:h-72 lgx:w-72"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};
