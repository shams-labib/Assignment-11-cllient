import React from "react";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import Logo from "../Shared/Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-t-3xl p-10 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          {/* Replace this with your logo */}
          <div>
            <Logo></Logo>
          </div>
        </div>

        {/* Links */}
        <nav className="grid grid-flow-col gap-6">
          <a
            href="#"
            className="link link-hover hover:text-blue-500 transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="link link-hover hover:text-blue-500 transition-colors"
          >
            Contact
          </a>
          <a
            href="#"
            className="link link-hover hover:text-blue-500 transition-colors"
          >
            Jobs
          </a>
          <a
            href="#"
            className="link link-hover hover:text-blue-500 transition-colors"
          >
            Press Kit
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="#"
            className="hover:text-blue-500 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-red-500 transition-colors"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="hover:text-blue-700 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-300 dark:border-gray-700" />

      {/* Copyright */}
      <p className="text-center text-sm">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
