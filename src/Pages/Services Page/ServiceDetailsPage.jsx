import React, { useState } from "react";

// Demo service data (একটি সার্ভিসের জন্য)
const demoService = {
  service_name: "Luxury Wedding Decoration",
  cost: 50000,
  unit: "per event",
  category: "wedding",
  description:
    "Full wedding decoration including stage, lighting, flowers, and seating arrangement.",
  image: "https://example.com/images/wedding1.jpg",
};

// Demo logged-in user
const loggedInUser = {
  name: "Shams Ahmed",
  email: "shams@example.com",
};

const ServiceDetailsPage = () => {
  const [bookingData, setBookingData] = useState({
    name: loggedInUser.name,
    email: loggedInUser.email,
    date: "",
    location: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    console.log("Booking Data:", bookingData);
    // Axios না থাকায় শুধু console.log
    setSuccessMessage("Booking Successful! (Demo)");
    setBookingData({ ...bookingData, date: "", location: "" });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Service Info */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <img
          src={demoService.image}
          alt={demoService.service_name}
          className="w-full md:w-1/2 h-64 object-cover rounded-lg"
        />
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">
            {demoService.service_name}
          </h1>
          <p className="text-gray-700 mb-2">{demoService.description}</p>
          <p className="font-bold text-lg">
            {demoService.cost} BDT / {demoService.unit}
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="border p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Book This Service</h2>
        <form onSubmit={handleBooking} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={bookingData.name}
            readOnly
            className="border p-2 rounded bg-gray-100"
          />
          <input
            type="email"
            name="email"
            value={bookingData.email}
            readOnly
            className="border p-2 rounded bg-gray-100"
          />
          <input
            type="date"
            name="date"
            value={bookingData.date}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="location"
            value={bookingData.location}
            onChange={handleChange}
            placeholder="Enter location"
            required
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Book Now
          </button>
        </form>

        {successMessage && (
          <p className="text-green-600 mt-4 font-semibold">{successMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
