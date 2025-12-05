import React from "react";
import { Outlet } from "react-router";
import Logo from "../Components/Shared/Logo/Logo";
import authImg from "../assets/auth.png";
const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Logo></Logo>
      <div className="flex flex-col md:flex-row items-center min-h-screen md:my-20">
        <div className="flex-1 w-full md:w-1/2">
          <Outlet />
        </div>
        <div className="flex-1 w-full md:w-1/2 hidden md:block">
          <img
            src={authImg}
            alt="Auth Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
