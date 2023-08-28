"use client";

import { Content, Navbar, LoginForm, LoginSosmed, SignUp } from "./components";

const AuthLogin: React.FC = () => (
  <div className="login">
    <Navbar />
    <Content>
      <LoginSosmed />
      <LoginForm />
      <SignUp />
    </Content>
  </div>
);

export default AuthLogin;
