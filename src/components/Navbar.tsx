"use client";

import { Burger, CloseButton } from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import Link from "next/link";
import clsx from "clsx";
import { useEffect } from "react";
import { INavbarItem } from "~/interfaces/navbar";
import { useRouter } from "next/navigation";
import useActiveNavbar from "~/app/hooks/useActiveNavbar";
import { LOGO_IMAGE } from "~/common/image";

const itemNavbar: INavbarItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "#about" },
  { label: "Dịch vụ", href: "#service" },
  { label: "Feedback", href: "#feedback" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const router = useRouter();

  const [opened, { toggle }] = useDisclosure();
  const [scroll] = useWindowScroll();
  const { currentSession, setCurrentSession } = useActiveNavbar();

  const onClickItem = (data: INavbarItem) => {
    setCurrentSession(data.href);
    router.push(data.href);
  };

  const onClickItemMobile = (data: INavbarItem) => {
    setCurrentSession(data.href);
    toggle();
    router.push(data.href);
  };

  useEffect(() => {
    if (opened) {
      document.querySelector("body")?.classList.add("disable__scroll");
    }

    return () => {
      document.querySelector("body")?.classList.remove("disable__scroll");
    };
  }, [opened]);

  return (
    <div className={clsx("w-full fixed top-0 z-[999]")}>
      <div
        className={clsx("transition-all ease-linear duration-100 ", [
          scroll.y > 100 ? "bg-white/60 backdrop-blur-lg" : "bg-transparent",
        ])}>
        <div className="container flex items-center justify-between mx-auto p-5">
          <Link href={"/"}>
            <img
              src={LOGO_IMAGE}
              width="100"
              height="100"
              title="Chau47"
              alt="Chau47"
              className="h-12 w-[100px] object-contain object-center"
            />
          </Link>

          <ul className="md:flex hidden items-center gap-5">
            {itemNavbar.map((item: INavbarItem, index: number) => (
              <li
                key={index}
                onClick={() => onClickItem(item)}
                className={clsx(
                  "text-lg font-medium hover:text-primary-100 px-5 py-1 cursor-pointer",
                  [scroll.y > 100 ? "text-neutral-600" : "text-white"],
                  [currentSession === item.href && "!text-primary-100"],
                )}>
                {item.label}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <Burger
              className="md:hidden block"
              color="blue"
              opened={opened}
              onClick={toggle}
              aria-label="Toggle navigation"
            />
          </div>
        </div>
      </div>

      {/* menu on mobile and tablet */}
      <div
        className={clsx("fixed top-0 bottom-0 left-0 right-0 z-50", [
          !opened && "pointer-events-none",
        ])}>
        <div
          onClick={toggle}
          className={clsx(
            "absolute top-0 bottom-0 left-0 right-0 bg-black/50 transition-all ease-linear duration-100 z-0",
            [opened ? "opacity-100" : "opacity-0"],
          )}
        />
        <div
          className={clsx(
            "relative md:w-1/2 w-3/4 h-full bg-white p-5 transition-all ease-linear duration-100",
            [opened ? "translate-x-[0%]" : "-translate-x-full"],
          )}>
          <div className="flex items-center justify-between pb-10">
            <Link href={"/"}>
              <img
                src={LOGO_IMAGE}
                width="100"
                height="100"
                title="Chau47"
                alt="Chau47"
                className="h-16 w-[100px] object-contain object-center"
              />
            </Link>

            <CloseButton size={"xl"} onClick={toggle} />
          </div>
          <ul className="w-full flex flex-col gap-5">
            {itemNavbar.map((item: INavbarItem, index: number) => (
              <li
                onClick={() => onClickItemMobile(item)}
                className={clsx(
                  "w-full text-lg font-medium hover:text-primary-100 px-5 py-1 cursor-pointer",
                  [currentSession === item.href ? "text-primary-100" : ""],
                )}
                key={index}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
