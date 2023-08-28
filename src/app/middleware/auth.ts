"use client";

// Next
import { useRouter } from "next/navigation";

// Hooks
import { useAuth } from "@/features/auth/hooks";

// Interfaces
import { type IChildrenProps } from "@/features/app/interfaces";

const AuthMiddleware: React.FC<IChildrenProps> = ({ children }) => {
  const router = useRouter();
  const { authData } = useAuth();

  // Check authentication status here
  const isAuthenticated = authData.isLogin;

  // If user is not authenticated, redirect to login page
  if (!isAuthenticated) {
    router.push("/auth/login");

    return children;
  }

  router.push("/dashboard");

  return children;
};

export default AuthMiddleware;
