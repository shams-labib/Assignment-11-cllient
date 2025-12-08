import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const TopDecoratorsCard = ({ decorator }) => {
  // Experience rating: 1 star per year of experience, max 5 stars
  const experience = Number(decorator.experience);
  const fullStars = Math.min(experience, 5);
  const emptyStars = 5 - fullStars;

  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
      {/* Profile */}
      <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
            decorator.name
          )}&background=random`}
          alt={decorator.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="text-lg font-semibold mb-1">{decorator.name}</h3>

      {/* Specialist */}
      <p className="text-sm text-gray-500 mb-2">Decoration Expert</p>

      {/* Experience / Ratings */}
      <div className="flex items-center mb-2">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 mr-1" />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={i} className="text-gray-300 mr-1" />
        ))}
      </div>

      {/* Email / Address */}
      <p className="text-sm text-gray-600">{decorator.email}</p>
      <p className="text-sm text-gray-600">{decorator.address}</p>
    </div>
  );
};

// Demo usage
const demoDecorator = {
  name: "মতলব মিয়া",
  email: "user8@gmail.com",
  address: "rangpur",
  experience: "6",
  role: "decorator",
  status: "approved",
};

const TopDecorators = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-6">
      <TopDecoratorCard decorator={demoDecorator} />
    </div>
  );
};

export default TopDecoratorsCard;
