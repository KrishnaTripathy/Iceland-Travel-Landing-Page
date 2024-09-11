import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515268064940-5150b7c29f35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Hero Section */}
      <div className="text-center pt-32">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Find the perfect trip for you and discover extraordinary adventures
          with us!
        </h1>
        <p className="text-lg text-white mb-8 max-w-xl mx-auto">
          Embark on a journey of exploration and excitement as we guide you
          towards unforgettable experiences across the globe.
        </p>
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>

      {/* Footer Section with Glassmorphism */}
      <footer className="bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-t border-white/30 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Footer Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">CelestialUI</h3>
            <p className="text-sm text-gray-300">
              Your gateway to the extraordinary beauty, culture, and exhilarating
              adventures awaiting in the captivating landscapes of Iceland.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Navigations</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline text-gray-300">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-gray-300">
                  Destinations
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-gray-300">
                  Travel Packages
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-gray-300">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Social and Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-white">Social</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline text-gray-300">
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-gray-300">
                  X
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-gray-300">
                  Youtube
                </a>
              </li>
            </ul>
            <h4 className="font-bold mt-6 mb-4 text-white">Contact Us</h4>
            <ul>
              <li className="mb-2 text-gray-300">travel@CelestialUI.io</li>
              <li className="mb-2 text-gray-300">(704) 555-0127</li>
              <li className="mb-2 text-gray-300">
                2118 Thornridge Cir. Syracuse, Connecticut 35624
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-sm text-gray-300">
          <p className="mb-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </p>
          <p>©CelestialUI 2024. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
