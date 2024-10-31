import { ProjectCard } from "./ProjectCard";
import { WorkItems } from "./WorkItems";

export const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headLine-2 mb-8">My portfolio highlights</h2>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-x-4 gap-y-5">
          {WorkItems.map((item) => (
            <ProjectCard
              key={item.id}
              imgSrc={item.imgSrc}
              title={item.title}
              tags={item.tags}
              projectLink={item.projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
