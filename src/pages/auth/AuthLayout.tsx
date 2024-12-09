import React from "react";
import { Outlet } from "react-router";
import { authImg } from "../../assets";

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-light">
      <div className="h-1/3 bg-primary-light">
          <img src={authImg} alt="phone image" />
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;