"use client";

import clsx from "clsx";
import { Fragment, useEffect, useRef, useState } from "react";
import { SwiperProps, Swiper as SwiperRA } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper as TSwiper } from "swiper/types";

interface IProps extends SwiperProps {
  children: React.ReactNode;
  loading?: boolean;
  skelatonEl?: React.ReactNode;
  initialSkeleton?: number;
  skelatonClassNames?: {
    wrapper?: string;
    item?: string;
  };
  ssr?: boolean;
}

export const Swiper = (props: IProps) => {
  const {
    children,
    loading,
    skelatonEl,
    initialSkeleton = 1,
    skelatonClassNames,
    navigation,
    ssr = false,
    ...restProps
  } = props;

  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const navigationPrevRef = useRef<HTMLButtonElement>(null);

  const [isClient, setIsClient] = useState(ssr);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative swiper-custom">
      {!loading && isClient && (
        <SwiperRA
          {...restProps}
          onBeforeInit={(swiper: TSwiper) => {
            if (typeof swiper.params.navigation === "object") {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }
          }}
        >
          {children}
        </SwiperRA>
      )}

      {navigation && (
        <Fragment>
          <button
            ref={navigationPrevRef}
            className={clsx(
              "swiper-button-custom--prev md:block hidden absolute -left-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 border shadow-md rounded-full z-10",
              [!isClient && "opacity-0"],
            )}
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            ref={navigationNextRef}
            className={clsx(
              "swiper-button-custom--next md:block hidden absolute -right-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 border shadow-md rounded-full z-10",
              [!isClient && "opacity-0"],
            )}
          >
            <FaChevronRight size={24} />
          </button>
        </Fragment>
      )}

      {(loading || !isClient) && (
        <div className={clsx("py-10", skelatonClassNames?.wrapper)}>
          {[...new Array(initialSkeleton)].map((_, index) => (
            <div
              key={index}
              className={clsx("w-full", skelatonClassNames?.item)}
            >
              {skelatonEl}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
