import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-md dark:shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-white dark:bg-gray-800">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={service.image || "/default-image.png"}
          alt={service.serviceName}
          className="w-full h-56 md:h-64 object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
          {service.serviceName}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
          {service.category}
        </p>
        <p className="font-bold text-gray-800 dark:text-gray-200 mb-4">
          {service.cost} BDT / {service.unit}
        </p>
        <Link
          to={`/servicesDetails/${service._id}`}
          className="text-center bg-primary hover:from-blue-600 hover:to-indigo-600 text-white px-5 py-2 rounded-lg font-medium transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
