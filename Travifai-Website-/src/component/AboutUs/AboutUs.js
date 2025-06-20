import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center w-full space-y-16 mt-10 mb-20 px-4 sm:px-8 lg:px-16">
      {/* DISCOVER Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center w-full text-center space-y-8 sm:space-x-10 sm:space-y-0">
        {/* DISCOVER Text */}
        <h1
          className="font-extrabold text-black leading-none tracking-tight text-4xl sm:text-6xl lg:text-8xl"
        >
          DISCOVER
        </h1>

        {/* Description Text */}
        <p className="text-xl text-gray-700 max-w-full sm:max-w-lg leading-relaxed text-left">
          Discover dream destinations with our travel agency website. Enjoy easy
          booking, exclusive deals, and expert guidance for your perfect getaway.
          Your adventure awaits!
        </p>
      </div>

      {/* BEST PLACES Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center w-full text-center space-y-8 sm:space-x-10 sm:space-y-0">
        {/* Rounded Button-Like Image */}
        <div className="relative w-56 h-24 bg-gray-100 rounded-full shadow-md flex items-center justify-center overflow-hidden">
          <img
            src="https://outdoortroop.com/wp-content/uploads/2021/04/107386335_l-scaled.jpg"
            alt="Travel destination"
            className="absolute w-full h-full object-cover scale-150"
          />
        </div>

        {/* BEST PLACES Text */}
        <h1
          className="font-extrabold text-black leading-none tracking-tight text-4xl sm:text-6xl lg:text-8xl"
        >
          BEST PLACES
        </h1>
      </div>

      {/* New Section with the Provided Image */}
      <div className="flex justify-center items-center w-full">
        <img
          src="https://images.pexels.com/photos/674783/pexels-photo-674783.jpeg?cs=srgb&dl=pexels-carlos-pernalete-tua-210498-674783.jpg&fm=jpg"
          alt="Airplane flying over tropical sea at sunset"
          className="w-full max-w-full sm:max-w-4xl rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutUs;
