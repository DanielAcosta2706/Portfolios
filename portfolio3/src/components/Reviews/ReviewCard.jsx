import PropTypes from "prop-types";
import { rating } from "./rating";

export const ReviewCard = ({ content, imgSrc, name, company }) => {
  return (
    <div className="flex min-w-[320px] flex-col rounded-xl bg-zinc-800 p-5 lg:min-w-[420px]">
      <div className="mb-3 flex items-center gap-1">
        {rating.map((item, key) => (
          <span
            className="material-symbols-rounded text-[18px] text-yellow-300"
            key={key}
            style={item.style}
          >
            {item.icon}
          </span>
        ))}
      </div>
      <p className="mb-8 text-zinc-400">{content}</p>
      <div className="mt-auto flex items-center gap-2">
        <figure className="img-box rounded-lg">
          <img
            src={imgSrc}
            alt={name}
            width={44}
            height={44}
            loading="lazy"
            className="img-cover"
          />
        </figure>
        <div>
          <p>{name}</p>
          <p className="text-xs tracking-wider text-zinc-400">{company}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};
