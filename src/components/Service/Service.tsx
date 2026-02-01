"use client";

import { IoCarSport } from "react-icons/io5";
import { GiBusDoors, GiCrackedGlass } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";

import useScrollActiveNavbar from "~/app/hooks/useScrollActiveNavbar";
import { HeaderContent } from "../Core/Typography";
import { WrapSection } from "../Core/Section";
import { ServiceCard } from "./ServiceCard";

export const Service = () => {
  const { ref } = useScrollActiveNavbar({ path: "#service" });

  return (
    <WrapSection id="service" ref={ref} className="container">
      <HeaderContent border title="Dịch vụ của chúng tôi" />

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-10 text-center gap-5">
        <ServiceCard
          icon={
            <IoCarSport className="min-w-12 size-12 mb-3 text-primary-200" />
          }
          title="Đánh kính ô tô"
        />
        <ServiceCard
          icon={
            <FaTruck className="min-w-12 w-12 min-h-12 h-12 mb-3 text-primary-200" />
          }
          title="Đánh kính xe tải"
        />
        <ServiceCard
          icon={
            <GiCrackedGlass className="min-w-12 size-12 mb-3 text-primary-200" />
          }
          title="Hàn kính xe"
        />
        <ServiceCard
          icon={
            <GiBusDoors className="min-w-12 size-12 mb-3 text-primary-200" />
          }
          title="Đánh cửa kính nhà"
        />
      </div>
    </WrapSection>
  );
};
