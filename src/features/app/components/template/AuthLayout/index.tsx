// Components
import { Content, Navbar } from "./components";

// Interfaces
import { type IAppChildrenProps } from "@/features/app/interfaces";

const AuthLayout: React.FC<IAppChildrenProps> = ({ children }) => (
  <div className="login">
    <Navbar />
    <Content>{children}</Content>
  </div>
);

export default AuthLayout;
