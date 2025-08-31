"use client";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

import { IHeroItem } from "./interfaces";
import { Swiper } from "../Swiper";
import { WrapSection } from "../Core/Section";
import useScrollActiveNavbar from "~/app/hooks/useScrollActiveNavbar";

const heroItems: IHeroItem[] = [
  {
    title: "Châu 47 - Tây ố - Đánh bóng kính",
    image: "/images/banner/banner_1.jpg",
  },
  {
    title: "Châu 47 - Tây ố - Đánh bóng kính",
    image: "/images/banner/banner_2.jpg",
  },
  {
    title: "Châu 47 - Tây ố - Đánh bóng kính",
    image: "/images/banner/banner_4.png",
  },
  {
    title: "Châu 47 - Tây ố - Đánh bóng kính",
    image: "/images/banner/banner_5.png",
  },
];

export function Hero() {
  const { ref } = useScrollActiveNavbar({ path: "/" });

  return (
    <WrapSection ref={ref} className="!py-0 relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        className="lg:h-screen h-[60vh] !py-0 [&_.swiper-pagination-bullet:not(.swiper-pagination-bullet-active)]:bg-white [&_.swiper-pagination-bullet]:opacity-80"
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        speed={1000}
        loop
        ssr={true}
        autoplay={{
          delay: 4000,
        }}>
        {heroItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex flex-col justify-center h-full bg-cover bg-center md:py-32 py-20"
              style={{
                backgroundImage: `url(${item.image})`,
              }}></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </WrapSection>
  );
}
