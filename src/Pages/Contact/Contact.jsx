import React from "react";
import { PhoneCall, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
          Need Decoration for Your Event?
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Get a free quote within minutes. Our team is always ready to help you
          plan your special moment with professional decoration services.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
          {/* Call Button */}
          <button className="btn px-8 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold flex items-center gap-2 shadow-md hover:shadow-xl transition-all duration-300">
            <PhoneCall className="w-5 h-5" />
            Call Now
          </button>

          {/* Message Button */}
          <button className="btn px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-2 shadow-md hover:shadow-xl transition-all duration-300">
            <MessageSquare className="w-5 h-5" />
            Message Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
