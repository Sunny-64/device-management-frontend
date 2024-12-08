import { Navbar } from "../components";
import { Outlet } from "react-router";

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
