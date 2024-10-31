// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { Data } from "./Data";
import "./testimonials.css";

export const Testimonials = () => {
  return (
    <section className="section" id="testimonials">
      <h2 className="section_Title">My clients say</h2>
      <span className="section_Subtitle">Testimonials</span>
      <Swiper
        className="lg:cont mx-mbottm15 grid"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide
              key={id}
              className="mb-mbottm3 rounded-3xl border border-solid border-black border-opacity-10 bg-containerColor px-6 py-5 lgx:px-8 lgx:py-6"
            >
              <img
                src={image}
                alt="Testimonials Image"
                className="mb-mbottm1 w-14 rounded-[3rem]"
              />
              <h3 className="mb-mbottm025 text-normal font-medium">{title}</h3>
              <p className="text-smallFontSize">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
