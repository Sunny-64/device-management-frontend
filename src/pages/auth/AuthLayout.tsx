import React from "react";
import { Outlet } from "react-router";
import { authImg } from "../../assets";

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-light md:grid md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-primary-light md:h-screen md:flex items-center">
          <img src={authImg} alt="phone image" />
      </div>
      <div className="md:flex items-center lg:col-span-2 w-full justify-center px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;