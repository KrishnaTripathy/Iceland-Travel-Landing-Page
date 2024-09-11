import React from "react";

const ReservationSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1526991757821-1307bf7800f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Reservation Image"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Information Section */}
        <div className="flex flex-col justify-center">
          {/* Heading */}
          <p className="text-gray-500 text-sm mb-2">[Reservation]</p>
          <h2 className="text-4xl font-bold mb-6">
            Secure spot for an unforgettable journey through Iceland's beauty and unique charms
          </h2>

          {/* Package Details */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">The Lavender Dreams</h3>
            <p className="text-gray-500 mb-4">
              Explore botanical gardens, geothermal parks, and coastal vistas, each painting a unique canvas of natural splendor.
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm">
                🌞 5 Days
              </span>
              <span className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm">
                📅 Mar - Oct
              </span>
              <span className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm">
                🏞️ Easy
              </span>
              <span className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm">
                ✈️ Keflavik Airport
              </span>
              <span className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm">
                🕒 Flexible
              </span>
            </div>

            {/* Price Section */}
            <div className="text-3xl font-bold mb-4">From $1,567</div>

            {/* Booking Button */}
            <button className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800">
              Booking Now
            </button>
          </div>
        </div>

        {/* Carousel Arrows */}
        <div className="absolute top-1/2 transform -translate-y-1/2 right-6 space-y-4">
          <button className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-100 text-black hover:bg-gray-200">
            ◀
          </button>
          <button className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-100 text-black hover:bg-gray-200">
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
