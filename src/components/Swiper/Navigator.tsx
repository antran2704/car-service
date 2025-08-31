import { Fragment } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const NavigatorSwiper = () => {
  return (
    <Fragment>
      <button className="swiper-button-next swiper-button-custom--prev md:block hidden absolute -left-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 border shadow-md rounded-full z-10">
        <FaChevronLeft size={24} />
      </button>
      <button className=" swiper-button-prev swiper-button-custom--next md:block hidden absolute -right-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 border shadow-md rounded-full z-10">
        <FaChevronRight size={24} />
      </button>
    </Fragment>
  );
};
