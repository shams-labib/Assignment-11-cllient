import React from "react";
import { CheckCircle, PhoneCall, MessageSquare } from "lucide-react";

const WhyChooseAndContact = () => {
  const features = [
    "100% On-time Delivery",
    "Professional Decoration Team",
    "Affordable & Transparent Pricing",
    "Custom Theme & Design Options",
    "High Quality Materials Guaranteed",
    "24/7 Support & Quick Response",
  ];

  return (
    <div className="w-full space-y-20 py-16">
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Why Choose <span className="text-primary">Us?</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-900 cursor-pointer shadow-xl rounded-2xl flex items-start gap-4 hover:scale-105 transition-all duration-300 border"
            >
              <CheckCircle className="text-primary w-8 h-8" />
              <p className="text-lg font-semibold text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyChooseAndContact;
