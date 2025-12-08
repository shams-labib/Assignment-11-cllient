import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import TopDecoratorsCard from "./TopDecoratorsCard";

const TopDecorator = () => {
  const axiosSecure = useAxiosSecure();
  const { data: decorators = [] } = useQuery({
    queryKey: ["users", "decorators"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users?role=decorator");
      return res.data;
    },
  });

  // First 4 decorators
  const topDecorators = decorators.slice(0, 4);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
      </div>
    </div>
  );
};

export default TopDecorator;
