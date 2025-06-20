import React from "react";

const testimonials = [
  {
    id: 1,
    stars: 5,
    text: "Our Maldives trip was a magical escape. Beautiful beaches, great activities, and seamless planning made it unforgettable for everyone!",
    name: "Bhanu Prakash Pandey",
    role: "Family Traveler",
    location: "Jharkhand",
    img: "", // Add image URL if available
  },
  {
    id: 2,
    stars: 5,
    text: "Unforgettable trip! Excellent service and amazing destinations!",
    name: "Jasika Kumari ",
    role: "Adventure Enthusiast",
    location: "Jharkhand",
    img: "", // Add image URL if available
  },
  {
    id: 3,
    stars: 5,
    text: "Santorini's charm captivated us! From the iconic sunsets to cozy accommodations, every moment was pure bliss. Can't wait to return!",
    name: "Tanisha", // Changed name to avoid duplication
    role: "Adventure Enthusiast",
    location: "London",
    img: "", // Add image URL if available
  },
  {
    id: 4,
    stars: 5,
    text: "The Swiss Alps adventure exceeded expectations. Stunning scenery, well-organized itinerary, and a fantastic experience for the whole family!",
    name: "Theja",
    role: "Adventure Enthusiast",
    location: "India",
    img: "", // Add image URL if available
  },
  {
    id: 5,
    stars: 5,
    text: "Fantastic service, seamless travel, unforgettable family adventure!",
    name: "Anna P",
    role: "Family Traveler",
    location: "Kerela",
    img: "", // Add image URL if available
  },
  {
    id: 6,
    stars: 5,
    text: "Dubai's desert safari thrilled us all. From thrilling rides to cultural shows, every detail was perfect. Wonderful for both families and friends!",
    name: "Liam R",
    role: "Group Traveler",
    location: "Toronto",
    img: "", // Add image URL if available
  },
];

const Testimonials = () => {
  return (
    <div className="relative bg-white py-16 px-4 md:px-20 lg:px-40">
      {/* "Testimonials" Text at the Top */}
      <div className="absolute top-0 left-10 w-full flex justify-center pointer-events-none -mr-[2.5rem]">
        <p className="text-blue-600 text-[150px] md:text-[120px] font-extrabold uppercase tracking-widest opacity-20">
          Testimonials
        </p>
      </div>
      {/* Main Content */}
      <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-center mb-4">
        What Our Clients Say
      </h2>
      {/* Spacer */}
      <div className="h-28"></div>
      <p className="relative z-10 text-center text-gray-600 mb-12">
        Here’s What Our Clients Say About The Unforgettable
        <br />
        Journeys and Seamless Experiences With Travifai
      </p>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className ="bg-white rounded-lg shadow-md p-6 border border-gray-200"
          >
            <div className="flex items-center mb-4">
              {Array(testimonial.stars)
                .fill(0)
                .map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.367 7.36l6.564-.954L10 1l3.069 5.407 6.564.953-4.877 4.184 1.122 6.545z" />
                  </svg>
                ))}
            </div>
            <p className="text-gray-600 mb-4">{testimonial.text}</p>
            <div className="flex items-center space-x-4">
              {testimonial.img && (
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-gray-200"
                />
              )}
              <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">
                  {testimonial.role}, {testimonial.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-12 flex justify-center">
        <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-black flex items-center shadow-lg">
          View All Testimonials
          <svg
            className="w-5 h-5 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;