"use client";

import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Transition } from "@mantine/core";
import { IoIosArrowUp } from "react-icons/io";

function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 50, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 100}>
        {(transitionStyles) => (
          <Button
            style={transitionStyles}
            radius={"lg"}
            className="w-12 h-12 bg-accent text-white p-0 hover:bg-primary transition-all ease-linear duration-100"
            onClick={() => scrollTo({ y: 0 })}
          >
            <IoIosArrowUp className="text-2xl" />
          </Button>
        )}
      </Transition>
    </Affix>
  );
}

export default ScrollToTop;
