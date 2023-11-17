"use client";

import { AuthLayout } from "@/features/app/components";

// Components
import { LoginSosmed, LoginForm, SignUp } from "./components";

const AuthLogin: React.FC = () => (
  <AuthLayout>
    <LoginSosmed />
    <LoginForm />
    <SignUp />
  </AuthLayout>
);

export default AuthLogin;
