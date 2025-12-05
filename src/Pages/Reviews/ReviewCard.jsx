import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: reviewText, ratings, user_photoURL, date } = review;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      className="
        w-full 
        max-w-sm sm:max-w-md md:max-w-lg 
        bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg 
        p-4 sm:p-6 
        rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700
        mx-auto 
        transition hover:shadow-2xl duration-300
      "
    >
      {/* Top Icon */}
      <FaQuoteLeft className="text-3xl sm:text-4xl text-teal-400 dark:text-teal-300 mb-3 sm:mb-4" />

      {/* Review Text */}
      <p className="text-gray-700 dark:text-gray-200 text-[15px] sm:text-[17px] font-medium leading-relaxed">
        {reviewText}
      </p>

      {/* Divider */}
      <div className="w-full border-t border-dashed border-gray-300 dark:border-gray-600 mt-4 sm:mt-5 mb-4 sm:mb-5 opacity-60"></div>

      {/* Bottom Section */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* User Avatar */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-teal-400 dark:border-teal-300 shadow">
          <img
            src={user_photoURL}
            alt="user"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
            {userName}
          </h3>

          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            ⭐ {ratings} / 5 — <span>{formattedDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
