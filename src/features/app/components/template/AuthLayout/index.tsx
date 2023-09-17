// Components
import { Content, Navbar } from "./components";

// Interfaces
import { type IChildrenProps } from "@/features/app/interfaces";

const AuthLayout: React.FC<IChildrenProps> = ({ children }) => (
  <div className="login">
    <Navbar />
    <Content>{children}</Content>
  </div>
);

export default AuthLayout;
