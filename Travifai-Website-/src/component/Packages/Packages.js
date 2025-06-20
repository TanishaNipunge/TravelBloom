import React, { useState } from "react";

const Packages = () => {
  const [activeLinkdiv, setActiveLinkdiv] = useState("All Locations");

  return (
    <div className="relative bg-white py-16 px-4 md:px-20 lg:px-40">
      {/* "Adventure" Text at the Top */}
      <div className="absolute top-0 left-10 w-full flex justify-center pointer-events-none -mr-[2.5rem]">
        <p className="text-blue-600 text-[150px] md:text-[120px] font-extrabold uppercase tracking-widest opacity-20">
          PACKAGES
        </p>
      </div>
      {/* Main Content */}
      <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-center mb-4">
        Find Your Perfect Trip
      </h2>
      {/* Spacer */}
      <div className="h-28"></div>
      <p className="relative z-10 text-center text-gray-600 mb-12">
        From serene beach escapes to thrilling city adventures, we offer a range
        of expertly
        <br />
        curated travel packages tailored to your preferences and budget.
      </p>

      {/* Buttons Section */}
      <div className="relative z-10 flex justify-center items-center space-x-4 mb-8">
        {[
          "All Locations",
          "London",
          "Spain",
          "Paris",
          "New York",
          "Dubai",
          "Sydney",
          "Manchester",
          "Rome",
          "Istanbul",
        ].map((location) => (
          <button
            key={location}
            className={`px-6 py-2 rounded-md shadow-md ${
              activeLinkdiv === location
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-700 whitespace-nowrap`}
            onClick={() => setActiveLinkdiv(location)}
          >
            {location}
          </button>
        ))}
      </div>

      {/* Destination Images and Package Details */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* New York Package */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/c8/55/52/c85552c5677d1e81fa6488dcf7a09421.jpg"
            alt="New York"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-black">New York</h3>
            <p className="text-sm text-gray-600">
              The city that never sleeps. From iconic landmarks to trendy
              neighborhoods, New York has it all.
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Experience the vibrant culture, world-class museums, and unique
              culinary offerings in the heart of the city.
            </p>
            <p className="font-semibold text-sm text-black mt-2">
              5 Days, 4 Nights Package
            </p>
            <p className="font-bold text-lg text-black mt-2">
              $1500 per person
            </p>
            <button className="mt-4 py-2 px-6 bg-black text-white rounded-md hover:bg-gray-800">
              Book Now
            </button>
          </div>
        </div>

        {/* London Package */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://media.timeout.com/images/105325211/750/562/image.jpg"
            alt="London"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-black">London</h3>
            <p className="text-sm text-gray-600">
              Explore the UK's bustling capital with its rich history and iconic
              landmarks like Big Ben and the London Eye.
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Visit historic sites, indulge in British cuisine, and enjoy the
              charm of London’s neighborhoods.
            </p>
            <p className="font-semibold text-sm text-black mt-2">
              4 Days, 3 Nights Package
            </p>
            <p className="font-bold text-lg text-black mt-2">
              $1200 per person
            </p>
            <button className="mt-4 py-2 px-6 bg-black text-white rounded-md hover:bg-gray-800">
              Book Now
            </button>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Plaza_de_Espana%2C_Seville%2C_Spain.jpg"
            alt="Spain"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-black">Spain</h3>
            <p className="text-sm text-gray-600">
              Immerse yourself in Spain's vibrant culture, from stunning
              architecture to delicious tapas and flamenco dancing.
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Experience Spain’s rich history, savor its delectable cuisine, and
              enjoy its vibrant festivals and flamenco dancing.
            </p>
            <p className="font-semibold text-sm text-black mt-2">
              7 Days, 6 Nights Package
            </p>
            <p className="font-bold text-lg text-black mt-2">
              $1499 per person
            </p>
            <button className="mt-4 py-2 px-6 bg-black text-white rounded-md hover:bg-gray-800">
              Book Now
            </button>
          </div>
        </div>

        {/* Additional Destinations (Add other places following the same pattern) */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/28/MG-Paris-Eiffel_Tower_3.jpg"
            alt="Paris"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-black">Paris</h3>
            <p className="text-sm text-gray-600">
              Discover the romance of Paris with its iconic Eiffel Tower,
              charming streets, and world-famous cuisine.
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Visit world-renowned landmarks, taste exquisite French pastries,
              and stroll through the romantic streets of Paris.
            </p>
            <p className="font-semibold text-sm text-black mt-2">
              6 Days, 5 Nights Package
            </p>
            <p className="font-bold text-lg text-black mt-2">
              $2799 per person
            </p>
            <button className="mt-4 py-2 px-6 bg-black text-white rounded-md hover:bg-gray-800">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
