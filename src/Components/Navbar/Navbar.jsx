import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import ThemeToggle from "../Shared/Theme/Theme";
import CustomNavLink from "../Shared/Custom Navlink/CustomNavlink";
import Logo from "../Shared/Logo/Logo";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { user, logOutUser } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Click outside handle
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = () => {
    logOutUser()
      .then(() => {
        navigate("/");
        Swal.fire({
          title: "Log Out Success!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const links = (
    <>
      <li>
        <CustomNavLink to="/" onClick={() => setDrawerOpen(false)}>
          Home
        </CustomNavLink>
      </li>
      <li>
        <CustomNavLink to="/services" onClick={() => setDrawerOpen(false)}>
          Services
        </CustomNavLink>
      </li>
      <li>
        <CustomNavLink to="/about" onClick={() => setDrawerOpen(false)}>
          About Us
        </CustomNavLink>
      </li>
      <li>
        <CustomNavLink to="/dashboard" onClick={() => setDrawerOpen(false)}>
          Dashboard
        </CustomNavLink>
      </li>
    </>
  );

  return (
    <>
      <div className=" bg-base-100 shadow-sm">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            {/* Drawer toggle button */}
            <button
              className="btn btn-ghost lg:hidden"
              onClick={() => setDrawerOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <span>
              {" "}
              <Logo></Logo>
            </span>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
          </div>

          <div className="navbar-end gap-5 relative px-5 md:px-0">
            <span className="hidden md:block">
              <ThemeToggle />
            </span>

            {user ? (
              <div className="relative" ref={dropdownRef}>
                {/* User Image */}
                <img
                  src={user.photoURL || "/default-user.png"}
                  alt={user.displayName || "User"}
                  className="w-10 h-10 rounded-full cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50 space-y-2">
                    <p className="px-4 py-2 text-gray-700 font-semibold">
                      {user.displayName || "User"}
                    </p>
                    <hr />
                    <Link
                      to={"/profile"}
                      className="w-full btn border-none  cursor-pointer text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="w-full  btn border-none  cursor-pointer text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to={"/login"} className="btn">
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-base-100 shadow-xl transform transition-transform duration-300 z-50 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8" /> {/* Logo size adjustable */}
            <ThemeToggle />
          </div>
          <button
            className="btn btn-ghost text-xl"
            onClick={() => setDrawerOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Drawer Links */}
        <ul className="menu p-4 flex flex-col gap-3 w-full">{links}</ul>
      </div>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setDrawerOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
