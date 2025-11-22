"use client";

import { IoCarSport } from "react-icons/io5";
import { GiBusDoors, GiCrackedGlass } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";

import useScrollActiveNavbar from "~/app/hooks/useScrollActiveNavbar";
import { HeaderContent } from "../Core/Typography";
import { WrapSection } from "../Core/Section";

export const Service = () => {
  const { ref } = useScrollActiveNavbar({ path: "#service" });

  return (
    <WrapSection id="service" ref={ref} className="container">
      <HeaderContent border title="Dịch vụ của chúng tôi" />

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-10 text-center gap-5">
        <div className="flex flex-col items-center justify-center border-2 border-gray-200 p-6 h-[180px] rounded-lg">
          <IoCarSport className="min-w-12 size-12 mb-3 text-primary-200" />
          <h3 className="lg:text-xl md:text-lg text-base text-gray-900 font-bold capitalize">
            Đánh kính ô tô
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-gray-200 p-6 h-[180px] rounded-lg">
          <FaTruck className="min-w-12 w-12 min-h-12 h-12 mb-3 text-primary-200" />
          <h3 className="lg:text-xl md:text-lg text-base text-gray-900 font-bold capitalize">
            Đánh kính xe tải
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-gray-200 p-6 h-[180px] rounded-lg">
          <GiCrackedGlass className="min-w-12 size-12 mb-3 text-primary-200" />
          <h3 className="lg:text-xl md:text-lg text-base text-gray-900 font-bold capitalize">
            Hàn kính xe
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-gray-200 p-6 h-[180px] rounded-lg">
          <GiBusDoors className="min-w-12 size-12 mb-3 text-primary-200" />
          <h3 className="lg:text-xl md:text-lg text-base text-gray-900 font-bold capitalize">
            Đánh cửa kính nhà
          </h3>
        </div>
      </div>
    </WrapSection>
  );
};
