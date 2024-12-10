import { useQuery } from "@tanstack/react-query";
import { LogoutSvg } from "../assets";
import { useAuth } from "../context";
import { clear } from "../utils";
import { QUERY_KEYS } from "../constants";
import { Api } from "../services/ApiService";

const Navbar = () => {
  const { logout } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.GET_USERNAME],
    queryFn: Api.getUsername,
  });

  const handleLogout = async () => {
    const res = await Api.logout();
    if (res.status === 200) {
      logout();
      clear();
    } else {
      alert("Failed to logout Please try again");
    }
  };
  return (
    <div className="flex justify-between w-full px-2 py-6 bg-primary-light text-white md:px-8">
      {!isLoading ? (
        <p className="font-bold">@{data?.data?.data?.username}</p>
      ) : (
        "loading.."
      )}
      <div
        className="hover:cursor-pointer flex gap-2 items-center"
        onClick={handleLogout}
      >
        <p>Logout</p>
        <LogoutSvg fill="#ffffff" className="w-4 h-4" />
      </div>
    </div>
  );
};

export default Navbar;
