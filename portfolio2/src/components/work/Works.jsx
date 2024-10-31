import { useEffect, useState } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import { WorksItem } from "./WorksItem";

export const Works = () => {
  const [item, seItem] = useState({ name: "all" });
  const [projects, setprojects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setprojects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setprojects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    seItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <div className="mb-mbottm2 flex items-center justify-center gap-x-1 lgx:gap-x-3">
        {projectsNav.map((item, index) => {
          return (
            <span
              className={`${active === index ? "active_Work" : ""} 
              work_Item`}
              onClick={(e) => {
                handleClick(e, index);
              }}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="lg:cont mx-mbottm15 grid grid-cols-[max-content] justify-center gap-12 md:grid-cols-[repeat(2,_max-content)]">
        {projects.map((item) => {
          return <WorksItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
