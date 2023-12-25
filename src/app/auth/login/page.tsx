"use client";

import { AuthLayout } from "@/features/app/components";

import { LoginSosmed, LoginForm, SignUp } from "./components";
import "./styles.scss";

const AuthLogin: React.FC = () => (
  <AuthLayout>
    <LoginSosmed />
    <LoginForm />
    <SignUp />
  </AuthLayout>
);

export default AuthLogin;
