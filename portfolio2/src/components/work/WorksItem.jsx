import { Link } from "react-router-dom";

export const WorksItem = ({ item }) => {
  return (
    <div
      className="rounded-2xl border border-solid border-black border-opacity-10 bg-containerColor p-5"
      key={item.id}
    >
      <img
        src={item.image}
        alt="Works Image"
        className="mb-mbottm1 w-[300px] rounded-2xl"
      />
      <h3 className="mb-mbottm05 text-normal font-medium">{item.title}</h3>
      <Link to="#" className="demo_Button">
        Demo <i className="bx bx-right-arrow-alt demo_Button-icon"></i>
      </Link>
    </div>
  );
};
