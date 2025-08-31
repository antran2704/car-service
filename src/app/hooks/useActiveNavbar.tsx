import { useContext } from "react";
import { ActiveNavbarContext } from "../context/ActiveNavbar";

const useActiveNavbar = () => {
  const { currentSession, setCurrentSession } = useContext(ActiveNavbarContext);

  return { currentSession, setCurrentSession };
};

export default useActiveNavbar;
