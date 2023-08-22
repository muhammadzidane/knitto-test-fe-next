import { Content, Navbar, LoginForm, LoginSosmed } from "./components";

const AuthLogin = () => (
  <div className="login">
    <Navbar />
    <Content>
      <LoginSosmed />
      <LoginForm />
      {/* <SignUp /> */}
    </Content>
  </div>
);

export default AuthLogin;
