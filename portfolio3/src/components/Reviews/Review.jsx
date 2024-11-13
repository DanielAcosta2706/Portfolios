import { ReviewCard } from "./ReviewCard";
import { reviewItems } from "./reviewItems";

export const Review = () => {
  return (
    <section id="review" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 reveal-up mb-8">What our customers say</h2>
        <div className="scrub-slide flex w-fit items-stretch gap-3">
          {reviewItems.map((item) => (
            <ReviewCard
              key={item.id}
              name={item.name}
              imgSrc={item.imgSrc}
              company={item.company}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
