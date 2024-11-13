import { SkillCard } from "./SkillCard";
import { skillItems } from "./SkillItems";

export const Skill = () => {
  return (
    <section id="tool" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
        <p className="mb-8 mt-3 max-w-[50ch] text-zinc-400">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3">
          {skillItems.map((item) => (
            <SkillCard
              key={item.id}
              imgSrc={item.imgSrc}
              label={item.label}
              desc={item.desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
