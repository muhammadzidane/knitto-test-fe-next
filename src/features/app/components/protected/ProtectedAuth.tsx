"use client";

import { useSession } from "next-auth/react";
// Next
import { redirect } from "next/navigation";
import { useEffect } from "react";

// Interfaces
import { type IAppChildrenProps } from "../../interfaces";

const ProtectedAuth: React.FC<IAppChildrenProps> = ({ children }) => {
  const { data: session } = useSession();

  useEffect(() => {
    if (window.location.pathname === "/auth/login" && session?.user) {
      redirect("/home");
    }
  }, [session?.user]);

  return <div>{children}</div>;
};

export default ProtectedAuth;
