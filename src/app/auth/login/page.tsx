"use client";

// Components
import { LoginForm, LoginSosmed, SignUp } from "./components";
import { AuthLayout } from "@/features/app/components";

const AuthLogin: React.FC = () => (
  <AuthLayout>
    <LoginSosmed />
    <LoginForm />
    <SignUp />
  </AuthLayout>
);

export default AuthLogin;
