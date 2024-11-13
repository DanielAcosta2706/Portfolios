import { aboutItems } from "./aboutItems";

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="reveal-up rounded-2xl bg-zinc-800/50 p-7 md:p-12">
          <p className="mb-4 text-justify text-zinc-300 md:mb-8 md:max-w-[60ch] md:text-xl">
            Welcome! I&apos;m Daniel Acosta, a professional web developer with a
            knack for crafting visually stunning and highly functional websites.
            Combining creativity and technical expertise. I transform your
            vision into digital masterpiece that excels in both appearance and
            performance.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map((item) => (
              <div key={item.id}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {item.number}
                  </span>
                  <span className="font-semibold text-sky-400 md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{item.label}</p>
              </div>
            ))}
            <img
              src="logo1.svg"
              alt="Logo Daniel Acosta"
              width={30}
              height={30}
              className="ml-auto md:h-[40px] md:w-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
