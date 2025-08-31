"use client";

import { SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { HeaderContent } from "../Core/Typography";
import { Swiper } from "../Swiper";
import { WrapSection } from "../Core/Section";
import useScrollActiveNavbar from "~/app/hooks/useScrollActiveNavbar";
import { feedbackItems } from "./common";

export const Feedback = () => {
  const { ref } = useScrollActiveNavbar({ path: "#feedback" });

  return (
    <WrapSection id="feedback" ref={ref} className="container">
      <HeaderContent border title={"Feedback"} />

      <div className="pt-5">
        <Swiper
          spaceBetween={20}
          loop={true}
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          freeMode={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}>
          {feedbackItems.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className="flex flex-col justify-between h-full bg-gray-100 p-8 rounded-md">
                <p className="leading-relaxed mb-6">{item.description}</p>
                <div className="flex items-center gap-5">
                  <img
                    alt={item.title}
                    title={item.title}
                    loading="lazy"
                    src={item.avatar}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex flex-col">
                    <span className="title-font font-medium text-gray-900">
                      {item.title}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {item.subtitle}
                    </span>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </WrapSection>
  );
};
