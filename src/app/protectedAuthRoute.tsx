"use client";

// Next
import { useRouter } from "next/navigation";

// Hooks
import { useAuth } from "@/features/auth/hooks";

// Interfaces
import { type IAppChildrenProps } from "@/features/app/interfaces";

const ProtectedAuthRoute: React.FC<IAppChildrenProps> = ({ children }) => {
  const router = useRouter();
  const { authState } = useAuth();

  // Check authentication status here
  const isAuthenticated = authState.isLogin;

  // If user is not authenticated, redirect to login page
  if (!isAuthenticated) {
    router.push("/auth/login");

    return children;
  }

  router.push("/home");

  return children;
};

export default ProtectedAuthRoute;
