import React from "react";
import { FaPlane, FaHeadset, FaRegCheckCircle, FaShieldAlt } from "react-icons/fa";

const TravelPartner = () => {
  return (
    <div className="relative bg-white py-16 px-4 md:px-20 lg:px-40">
      {/* "Adventure" Text at the Top */}
      <div className="absolute top-0 left-10 w-full flex justify-center pointer-events-none -mr-[2.5rem]">
          <p className="text-blue-600 text-[150px] md:text-[120px] font-extrabold uppercase tracking-widest opacity-20">
            Choose Us
          </p>
        </div>
        {/* Main Content */}
        <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-center mb-4">
          Your Trusted Travel Partner 
        </h2>
        {/* Spacer */}
        <div className="h-28"></div>
        <p className="relative z-10 text-center text-gray-600 mb-12">
          Explore Travel Tips, Hidden Gems, and Expert Guides to
          <br />
          Make Your Next Adventure Unforgettable.
        </p>

      <div className="relative z-10 grid md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <FaPlane className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Expertly Curated Packages</h3>
                <p className="text-gray-600">
                  Carefully designed itineraries tailored to your preferences.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <FaHeadset className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">24/7 Customer Support</h3>
              <p className="text-gray-600">
                Always here to assist you at every step of your journey.
              </p>
            </div>
          </div>
          <img
            src="https://e0.pxfuel.com/wallpapers/898/938/desktop-wallpaper-travel-tours-and-travels-background-travel-and-tourism.jpg"
            alt="Travel Packages"
            className="rounded-lg shadow-lg mb-4"
          />
        </div>

        {/* Center Image */}
        <div>
          <img
            src="https://i.pinimg.com/originals/c2/03/56/c203561b7afad1a093dc8de90757882f.jpg"
            alt="Travel Destination"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div>
            <img
              src="https://wallpaperaccess.com/full/1510481.jpg"
              alt="Hassle-Free Booking"
              className="rounded-lg shadow-lg mb-4"
            />
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <FaRegCheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Hassle-Free Booking</h3>
                <p className="text-gray-600">
                  Easy and secure booking process, giving you peace of mind.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <FaShieldAlt className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Travel Insurance Included</h3>
              <p className="text-gray-600">
                Secure every trip with comprehensive coverage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPartner;
