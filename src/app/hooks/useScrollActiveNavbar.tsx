import { useInViewport } from "@mantine/hooks";
import useActiveNavbar from "./useActiveNavbar";
import { useEffect } from "react";

const useScrollActiveNavbar = ({ path }: { path: string }) => {
  const { ref, inViewport } = useInViewport();
  const { setCurrentSession } = useActiveNavbar();

  useEffect(() => {
    if (inViewport) {
      setCurrentSession(path);
    }
  }, [inViewport, path]);

  return { ref };
};

export default useScrollActiveNavbar;
