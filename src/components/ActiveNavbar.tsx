/* eslint-disable no-console */
"use client";

import { useEffect, useState } from "react";
import { ActiveNavbarProvider } from "~/app/context/ActiveNavbar";

const ActiveNavbar = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<string>("/");

  const onChangeSession = (value: string) => {
    setSession(value);
  };

  useEffect(() => {
    console.log(
      "%cHello there! 🙋",
      "color: #f8796c;font-size: 18px;font-weight: 600;",
    );
    console.log(
      "%cWebsite was created with many love by Antran 🥰🥰🥰",
      "color: #f8796c;font-size: 16px;font-weight: 500;",
    );
  }, []);

  return (
    <ActiveNavbarProvider
      value={{ currentSession: session, setCurrentSession: onChangeSession }}
    >
      {children}
    </ActiveNavbarProvider>
  );
};

export default ActiveNavbar;
