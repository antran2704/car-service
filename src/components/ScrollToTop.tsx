"use client";

import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Transition } from "@mantine/core";
import { IoIosArrowUp } from "react-icons/io";

function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 50, right: 10 }}>
      <Transition transition="slide-up" mounted={scroll.y > 100}>
        {(transitionStyles) => (
          <Button
            style={transitionStyles}
            radius={"lg"}
            className="md:w-12 md:h-12 w-10 h-10 bg-primary-100 text-white p-0 transition-all ease-linear duration-100"
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
