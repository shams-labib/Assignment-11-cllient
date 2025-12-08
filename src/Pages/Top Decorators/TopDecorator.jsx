import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import TopDecoratorsCard from "./TopDecoratorsCard";
import { motion } from "framer-motion";
import { Sparkles, Users } from "lucide-react";

const TopDecorator = () => {
  const axiosSecure = useAxiosSecure();
  const { data: decorators = [] } = useQuery({
    queryKey: ["users", "decorators"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users?role=decorator");
      return res.data;
    },
  });

  const topDecorators = decorators.slice(0, 4);

  return (
    <div className="container mx-auto py-12">
      {/* Title Section */}
      <div className="text-center mb-12 space-y-3">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-3"
        >
          <Sparkles className="w-8 h-8 text-purple-500 animate-pulse" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Top Decorators
          </h2>
          <Sparkles className="w-8 h-8 text-purple-500 animate-pulse" />
        </motion.div>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto flex items-center justify-center gap-2"
        >
          <Users className="w-5 h-5 text-blue-500 animate-bounce" />
          Discover the most skilled and creative decorators of our platform.
        </motion.p>
      </div>

      {/* Grid Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {topDecorators.length > 0 ? (
          topDecorators.map((decorator) => (
            <TopDecoratorsCard
              key={decorator._id || decorator.email}
              decorator={decorator}
            />
          ))
        ) : (
          <p className="text-center text-gray-700 dark:text-gray-300 col-span-full">
            No decorators available.
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default TopDecorator;
