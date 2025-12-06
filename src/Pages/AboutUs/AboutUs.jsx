import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 rounded-xl md:my-8">
      <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image */}
        <div className="relative">
          <img
            className="rounded-2xl shadow-xl object-cover w-full md:h-[400px] h-[300px]"
            src="https://i.ibb.co.com/4wN3xT02/How-to-become-an-interior-decorator-in-post-image-4.jpg"
            alt="Team working"
          />

          <div className="absolute bottom-[-20px] right-[-20px] bg-white dark:bg-gray-800 shadow-lg px-6 py-4 rounded-xl">
            <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
              5+ Years
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Of Excellent Service
            </p>
          </div>
        </div>

        {/* Right Side: Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            About <span className="text-indigo-600">Us</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
            We are a passionate team dedicated to delivering high-quality
            digital solutions. Our mission is to provide outstanding service,
            innovative ideas, and long-term support to help businesses grow in
            the digital world.
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-8">
            With a strong focus on user experience, performance, and clean
            design, we’ve helped hundreds of clients achieve their goals with
            professionalism and dedication.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                250+
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                120+
              </h3>
              <p className="text-gray-500 dark:text-gray-400">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                15+
              </h3>
              <p className="text-gray-500 dark:text-gray-400">Team Members</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                98%
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
