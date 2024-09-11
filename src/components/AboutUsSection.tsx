import React from 'react';

const AboutUsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <p className="text-gray-500 text-sm mb-2">[About Us]</p>
        <h2 className="text-4xl font-bold mb-6">
          It all began with a single journey—a trip to the land of fire and ice that sparked a profound love for Iceland.
        </h2>
        <p className="text-xl text-gray-500">
          Enchanted by its rugged beauty and rich culture, we knew we had found something truly special.
        </p>

        {/* Statistics */}
        <div className="mt-12 flex justify-center space-x-16">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-black">95%</h3>
            <p className="mt-2 text-gray-500">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-black">72+</h3>
            <p className="mt-2 text-gray-500">Popular Destinations</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-black">250+</h3>
            <p className="mt-2 text-gray-500">Experienced Guides</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
