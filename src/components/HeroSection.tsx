import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1469212044023-0e55b4b9745a?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-10 p-6 flex justify-between items-center">
        <div className="text-white text-xl font-semibold">CelestialUI</div>
        <ul className="flex space-x-8 text-white">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">Destination</li>
          <li className="hover:text-gray-300 cursor-pointer">Gallery</li>
          <li className="hover:text-gray-300 cursor-pointer">Travel Packages</li>
        </ul>
        <div className="text-white">EN</div>
      </nav>

      {/* Hero Text */}
      <div className="absolute top-1/4 left-8 text-white max-w-lg">
        <h1 className="text-5xl font-bold leading-tight">
          Weaving Your Dreams into Unforgettable Adventures
        </h1>
        <p className="mt-4 text-gray-300">
          Discover the captivating allure of Arctic wonders, from stunning landscapes to vibrant culture, on an unforgettable journey through the North.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full flex items-center hover:bg-gray-200">
          Booking Now
          <span className="ml-2">➔</span>
        </button>
      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-16 right-8 space-y-4">
        <a href="#" className="block bg-white p-3 rounded-full text-black">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="block bg-white p-3 rounded-full text-black">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="block bg-white p-3 rounded-full text-black">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>

      {/* Explore More */}
      <div className="absolute bottom-16 left-8 text-white flex items-center space-x-2">
        <span>Explore More</span>
        <span>↓</span>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>
  );
};

export default HeroSection;
