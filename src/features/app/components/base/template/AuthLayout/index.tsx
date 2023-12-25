import { type IAppChildrenProps } from "@/features/app/interfaces";

import { Content, Navbar } from "./components";
import "./styles.scss";

const AuthLayout: React.FC<IAppChildrenProps> = ({ children }) => (
  <div className="login">
    <Navbar />
    <Content>{children}</Content>
  </div>
);

export default AuthLayout;
