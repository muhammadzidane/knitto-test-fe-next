// Components
import { Sidebar, Navbar, Footer } from "./components";

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="app">
    <Sidebar />
    <div className="app__content">
      <Navbar />
      <div className="app__main-content">{children}</div>
    </div>
    <Footer />
  </div>
);

export default MainLayout;
