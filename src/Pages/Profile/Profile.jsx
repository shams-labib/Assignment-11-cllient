import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router"; // fixed import
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ProfileCard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Fetch the user's full profile from backend by email
  const { data: demoProfile = {} } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      if (!user?.email) return {};
      const res = await axiosSecure.get(`users?email=${user.email}`);
      return res.data[0] || {}; // get the first matched user
    },
  });

  // Merge real user with backend info as fallback
  const profile = {
    name: user?.displayName || demoProfile.name || "No Name",
    email: user?.email || demoProfile.email || "No Email",
    address: user?.address || demoProfile.address || "No Address",
    experience: user?.experience || demoProfile.experience || 0,
    role: user?.role || demoProfile.role || "user",
    status: user?.status || demoProfile.status || "offline",
    createdAt: user?.createdAt || demoProfile.createdAt || new Date(),
    photoURL:
      user?.photoURL ||
      demoProfile.photoURL ||
      "https://via.placeholder.com/150", // fallback image
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 transition-colors duration-300">
      <div className="card w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden transition-transform transform hover:scale-[1.01]">
        {/* Header / avatar */}
        <div className="flex justify-center mt-6">
          <div className="relative">
            <img
              src={profile.photoURL}
              alt={profile.name}
              className="w-32 h-32 rounded-full border-4 border-gradient-to-r from-indigo-500 to-pink-500 shadow-lg object-cover"
            />
            <span className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-md animate-pulse">
              {profile.status}
            </span>
          </div>
        </div>

        {/* Name / Email / Role */}
        <div className="text-center mt-4 px-6">
          <h2 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">
            {profile.name}
          </h2>
          <p className="text-gray-500 dark:text-gray-300 mt-2">
            {profile.email}
          </p>
          <p className="text-sm text-gray-400 mt-1">
            <span className="font-medium">Role:</span> {profile.role}
          </p>
        </div>

        {/* Details */}
        <div className="px-6 mt-4 text-gray-700 dark:text-gray-300 space-y-1">
          <p>
            <span className="font-semibold">Address:</span> {profile.address}
          </p>
          <p>
            <span className="font-semibold">Experience:</span>{" "}
            {profile.experience} years
          </p>
          <p>
            <span className="font-semibold">Joined:</span>{" "}
            {new Date(profile.createdAt).toLocaleDateString()}
          </p>
        </div>

        {/* Actions */}
        <div className="card-body items-center text-center mt-4 px-6">
          <button className="btn bg-violet-600 text-white w-full mb-2 hover:scale-105 transition-transform">
            Edit Profile
          </button>
          <Link
            to={"/"}
            className="btn btn-outline btn-error w-full hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            <FaArrowLeft /> Go Back
          </Link>
        </div>

        {/* Stats with animated icons */}
        <div className="flex justify-around bg-gray-50 dark:bg-gray-700 py-6 transition-colors duration-300">
          <div className="text-center transform transition-transform hover:scale-110">
            <p className="font-bold text-gray-800 dark:text-gray-100 text-xl">
              120
            </p>
            <p className="text-gray-400 dark:text-gray-300 text-sm flex items-center justify-center gap-2">
              <span className="inline-block animate-bounce">📄</span> Posts
            </p>
          </div>

          <div className="text-center transform transition-transform hover:scale-110">
            <p className="font-bold text-gray-800 dark:text-gray-100 text-xl">
              500
            </p>
            <p className="text-gray-400 dark:text-gray-300 text-sm flex items-center justify-center gap-2">
              <span className="inline-block animate-pulse">👥</span> Followers
            </p>
          </div>

          <div className="text-center transform transition-transform hover:scale-110">
            <p className="font-bold text-gray-800 dark:text-gray-100 text-xl">
              180
            </p>
            <p className="text-gray-400 dark:text-gray-300 text-sm flex items-center justify-center gap-2">
              <span className="inline-block animate-spin">🔄</span> Following
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
