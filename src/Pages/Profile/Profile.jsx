import React from "react";
import useAuth from "../../Hooks/useAuth";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const ProfileCard = () => {
  const { user } = useAuth();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 transition-colors duration-300">
      <div className="card w-full max-w-sm bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden transition-colors duration-300">
        <div className="flex justify-center mt-6">
          <img
            src={user.photoURL || "/default-user.png"}
            alt={user.displayName || "User"}
            className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-lg"
          />
        </div>

        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {user.displayName || "User Name"}
          </h2>
          <p className="text-gray-500 dark:text-gray-300 mt-2">
            {user.email || "user@example.com"}
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-400 mt-1">
            Role: {user.role || "Member"}
          </p>
        </div>

        <div className="card-body items-center text-center mt-4">
          <button className="btn bg-violet-600 text-white w-full mb-2 hover:scale-105 transition-transform">
            Edit Profile
          </button>
          <Link
            to={"/"}
            className="btn btn-outline btn-error w-full hover:scale-105 transition-transform"
          >
            <FaArrowLeft /> Go Back
          </Link>
        </div>

        <div className="flex justify-around bg-gray-50 dark:bg-gray-700 py-4 transition-colors duration-300">
          <div className="text-center">
            <p className="font-bold text-gray-800 dark:text-gray-100">120</p>
            <p className="text-gray-400 dark:text-gray-300 text-sm">Posts</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-gray-800 dark:text-gray-100">500</p>
            <p className="text-gray-400 dark:text-gray-300 text-sm">
              Followers
            </p>
          </div>
          <div className="text-center">
            <p className="font-bold text-gray-800 dark:text-gray-100">180</p>
            <p className="text-gray-400 dark:text-gray-300 text-sm">
              Following
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
