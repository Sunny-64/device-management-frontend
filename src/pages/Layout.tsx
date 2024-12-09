import { Navbar } from "../components";
import { Outlet } from "react-router";

const Layout: React.FC = () => {
  return (
    <div className="bg-light min-h-screen">
      <Navbar />
      <div className="p-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
