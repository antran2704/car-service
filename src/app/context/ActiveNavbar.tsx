import { createContext } from "react";

interface IActiveNavbarprovider {
  currentSession: string;
  setCurrentSession: (value: string) => void;
}

export const ActiveNavbarContext = createContext<IActiveNavbarprovider>({
  currentSession: "/",
  setCurrentSession: () => {},
});
export const ActiveNavbarProvider = ActiveNavbarContext.Provider;
