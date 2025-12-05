import React, { useState } from "react";
import { Link } from "react-router";

// Demo services data (locally)
const demoServices = [
  {
    service_name: "Luxury Wedding Decoration",
    cost: 50000,
    unit: "per event",
    category: "wedding",
    description:
      "Full wedding decoration including stage, lighting, flowers, and seating arrangement.",
    image: "https://example.com/images/wedding1.jpg",
  },
  {
    service_name: "Birthday Party Decoration",
    cost: 15000,
    unit: "per event",
    category: "birthday",
    description:
      "Complete birthday decoration with balloons, banners, and theme setup.",
    image: "https://example.com/images/birthday1.jpg",
  },
  {
    service_name: "Office Event Decoration",
    cost: 30000,
    unit: "per event",
    category: "office",
    description:
      "Professional office event decoration including stage, seating, and branding.",
    image: "https://example.com/images/office1.jpg",
  },
];

const ServicesPage = () => {
  const [services] = useState(demoServices);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [budgetFilter, setBudgetFilter] = useState([0, 100000]);

  // Filter logic
  const filteredServices = services.filter((service) => {
    const matchesSearch = service.service_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || service.category === categoryFilter;
    const matchesBudget =
      service.cost >= budgetFilter[0] && service.cost <= budgetFilter[1];
    return matchesSearch && matchesCategory && matchesBudget;
  });

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
        Our Services
      </h1>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6 items-center">
        <input
          type="text"
          placeholder="Search service..."
          className="border p-2 rounded flex-1 min-w-[200px]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border p-2 rounded min-w-[150px]"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="wedding">Wedding</option>
          <option value="birthday">Birthday</option>
          <option value="office">Office</option>
        </select>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <input
            type="range"
            min="0"
            max="100000"
            step="5000"
            value={budgetFilter[1]}
            className="w-full sm:w-48"
            onChange={(e) =>
              setBudgetFilter([budgetFilter[0], parseInt(e.target.value)])
            }
          />
          <span className="text-sm">Max Budget: {budgetFilter[1]} BDT</span>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 flex flex-col"
          >
            <img
              src={service.image}
              alt={service.service_name}
              className="w-full h-48 md:h-56 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-xl font-semibold mb-2">
                {service.service_name}
              </h2>
              <p className="text-gray-600 mb-2 flex-1">{service.description}</p>
              <p className="font-bold mb-2">
                {service.cost} BDT / {service.unit}
              </p>
              <Link
                to={"/servicesDetails"}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mt-auto"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
