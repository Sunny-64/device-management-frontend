import { LogoutSvg } from "../assets";
import { useAuth } from "../context";
import { clear } from "../utils";

interface FormProps {
  username?: string;
}

const Navbar = ({ username = "Naruto" }: FormProps) => {
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    clear();
  };
  return (
    <div className="flex justify-between w-full px-2 py-6 bg-primary-light text-white md:px-8">
      <p className="font-bold">@{username}</p>
      <div className="hover:cursor-pointer flex gap-2 items-center" onClick={handleLogout}>
        <p>Logout</p>
        <LogoutSvg fill="#ffffff" className="w-4 h-4"/>
      </div>
    </div>
  );
};

export default Navbar;
