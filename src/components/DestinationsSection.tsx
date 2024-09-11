import React from 'react';

// Define a type for the destination object
type Destination = {
  title: string;
  description: string;
  image: string;
};

// Define the list of destinations with typed data
const destinations: Destination[] = [
  {
    title: "Askja Caldera",
    description:
      "A glimpse into Iceland’s raw natural beauty and geological wonders. From its dramatic crater lakes to its desolate volcanic landscapes, this destination promises an unforgettable adventure.",
    image:
      "https://images.unsplash.com/photo-1515133997814-e6460be24073?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Mossy Mountain Hillside",
    description:
      "A sense of peace and serenity with nature and experience the beauty of Iceland’s wild landscapes.",
    image:
      "https://plus.unsplash.com/premium_photo-1670428615389-7bf61172e1be?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Reynisfjara Black Sand Beach",
    description:
      "A volcanic shore, towering cliffs, and dramatic seascapes, this iconic beach is a must-visit destination for nature lovers and adventurers alike.",
    image:
      "https://images.unsplash.com/photo-1484114805781-7e5bdef9cb9d?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const DestinationsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-gray-500 text-sm mb-2">[Destinations]</p>
          <h2 className="text-4xl font-bold mb-4">
            A unique blend of adventure, culture, and natural wonders
          </h2>
          <p className="text-gray-500 text-lg">
            Discover a fusion of adventure, culture, and scenic beauty across
            our diverse destinations, offering unforgettable experiences at
            every turn.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First large image card */}
          <div className="col-span-2 md:col-span-2 relative">
            <img
              src={destinations[0].image}
              alt={destinations[0].title}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-6 text-white">
              <h3 className="text-2xl font-bold">{destinations[0].title}</h3>
              <p className="mt-2 text-gray-300">{destinations[0].description}</p>
            </div>
          </div>

          {/* Smaller image cards */}
          {destinations.slice(1).map((destination, index) => (
            <div key={index} className="relative">
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-72 object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-6 text-white">
                <h3 className="text-xl font-bold">{destination.title}</h3>
                <p className="mt-2 text-gray-300">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
