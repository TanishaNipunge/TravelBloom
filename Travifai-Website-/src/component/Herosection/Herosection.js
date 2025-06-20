import React, { useState } from "react";

const Hero = () => {
  const [dropdowns, setDropdowns] = useState({
    destination: false,
    blog: false,
    tours: false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://th.bing.com/th/id/R.f35b1914826fa909f95ab251f96d21eb?rik=3oSR2U%2bohB19fA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-WXP4top5KTo%2fT0y8pvgNa5I%2fAAAAAAAAOYg%2fZt6naac2KDA%2fs1600%2fHimalayas%2b10.jpg&ehk=rwY0x%2fJMf57dUy6u7FJMgyvVpAB0NDcop7Juln%2bRtuw%3d&risl=&pid=ImgRaw&r=0')",
        backgroundColor: "#000", // Fallback color
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 lg:px-16 max-w-6xl pt-16">
        <h3 className="text-white text-lg sm:text-xl uppercase font-semibold tracking-widest font-sans">
          Discover Your Next
        </h3>

        <h1
          className="text-white font-bold uppercase tracking-widest mt-1"
          style={{ fontSize: "clamp(2rem, 9vw, 11rem)" }}
        >
          Adventure
        </h1>
        <p className="text-gray-300 mt-6 text-sm sm:text-lg font-medium">
          Experience the magic of exploring the world's most breathtaking
          destinations with our custom-designed travel packages for every
          wanderer.
        </p>

        {/* Search bar */}
        <div className="flex flex-col sm:flex-row items-center bg-white rounded-full px-8 py-2 shadow-md justify-between mt-8 w-full max-w-5xl mx-auto">
          {/* Dropdown Groups */}
          <div className="flex flex-wrap sm:flex-nowrap items-center space-x-6 md:space-x-12 lg:space-x-16">
            {/* Destination Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
                onClick={() => toggleDropdown("destination")}
                aria-expanded={dropdowns.destination}
                aria-haspopup="true"
              >
                <i className="ri-map-pin-user-fill text-xl"></i>
                <span>Destination</span>
              </button>
              {dropdowns.destination && (
                <div className="absolute left-0 bg-white shadow-lg rounded-lg p-4 mt-2 z-30 w-48">
                  <ul className="space-y-2">
                    <li className="hover:text-blue-500 cursor-pointer">Europe</li>
                    <li className="hover:text-blue-500 cursor-pointer">Asia</li>
                    <li className="hover:text-blue-500 cursor-pointer">Africa</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Blog Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
                onClick={() => toggleDropdown("blog")}
                aria-expanded={dropdowns.blog}
                aria-haspopup="true"
              >
                <i className="ri-blogger-line text-xl"></i>
                <span>Blog</span>
              </button>
              {dropdowns.blog && (
                <div className="absolute left-0 bg-white shadow-lg rounded-lg p-4 mt-2 z-30 w-48">
                  <ul className="space-y-2">
                    <li className="hover:text-blue-500 cursor-pointer">Travel Tips</li>
                    <li className="hover:text-blue-500 cursor-pointer">Destination Guides</li>
                    <li className="hover:text-blue-500 cursor-pointer">Stories</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Tours Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
                onClick={() => toggleDropdown("tours")}
                aria-expanded={dropdowns.tours}
                aria-haspopup="true"
              >
                <i className="ri-honour-line text-xl"></i>
                <span>Tours</span>
              </button>
              {dropdowns.tours && (
                <div className="absolute left-0 bg-white shadow-lg rounded-lg p-4 mt-2 z-30 w-48">
                  <ul className="space-y-2">
                    <li className="hover:text-blue-500 cursor-pointer">Adventure Tours</li>
                    <li className="hover:text-blue-500 cursor-pointer">Cultural Tours</li>
                    <li className="hover:text-blue-500 cursor-pointer">Luxury Tours</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Search Box */}
          <div className="flex items-center bg-black rounded-full px-4 py-2 mt-4 sm:mt-0 sm:ml-auto w-full sm:w-auto">
            <input
              type="text"
              placeholder="Find your next adventure"
              className="bg-transparent outline-none text-white placeholder-white flex-grow"
            />
            <button className="ml-2 bg-white hover:bg-gray-200 rounded-full p-1">
              <i className="ri-search-2-line text-black text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
