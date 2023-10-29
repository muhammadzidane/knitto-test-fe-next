"use client";

// Next
import { redirect } from "next/navigation";

// Interfaces
import { type IAppChildrenProps } from "../../interfaces";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

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
