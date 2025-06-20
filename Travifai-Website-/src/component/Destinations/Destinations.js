import React from "react";

const Destinations = () => {
  const destinations = [
    {
      image: "https://th.bing.com/th/id/R.2cdb5aefe33b77ea3c35c1d3da1435ad?rik=8NIIVjMNNbQ03A&riu=http%3a%2f%2f2.bp.blogspot.com%2f-p6z9J9t52Xc%2fUW6N6nHvspI%2fAAAAAAAAVDo%2fcr3PTb5SIrc%2fs1600%2fLapland%2bFinland%2b07.jpg&ehk=TW2FZeGKGf9DA3w26q8d1VAjnfQBGZucs%2bVOLDc%2b3a0%3d&risl=&pid=ImgRaw&r=0",
      title: "Lapland, Finland",
      description: "Escape to the snowy landscapes of Lapland for the chance to see the Northern Lights.",
      backgroundWidth: "100%",
      backgroundHeight: "300px",
    },
    {
      image: "https://th.bing.com/th/id/R.52d97b58fb3b650db65fb8a735a58444?rik=WUe7byb2C6VZsQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-B8JZa5Q3AqM%2fUQgN5l8IfFI%2fAAAAAAAAjxs%2fAJ1OFeYYfwg%2fs1600%2feiffel-tower-at-night-paris-france.jpg&ehk=49C%2fh2rhTw%2fxF9AkU0pRwuIQhng80OwqHTMBZXqqwEg%3d&risl=&pid=ImgRaw&r=0",
      title: "Paris, France",
      description: "Lose yourself in the charm of Paris, from iconic landmarks to world-class art and cuisine.",
      backgroundWidth: "100%",
      backgroundHeight: "400px",
    },
    {
      image: "https://th.bing.com/th/id/R.e58357cbd7f66c5e576708c045c9ecbe?rik=OOpnjsEofOUuAQ&riu=http%3a%2f%2fwww.voyage-photo.fr%2fwp-content%2fuploads%2fsites%2f34%2f2018%2f01%2fNew-York-City.jpg&ehk=up%2bdpCl9klXR4AX%2b6jROgVa7f0Oo9QCSnkPdNnZam74%3d&risl=&pid=ImgRaw&r=0",
      title: "New York City, USA",
      description: "Experience the excitement, culture, and nightlife of the iconic Big Apple.",
      backgroundWidth: "100%",
      backgroundHeight: "300px",
    },
    {
      image: "https://s.yimg.com/ny/api/res/1.2/jvkzkQLZ51wXmHswNTiktg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2021-07/59a4bc60-f23c-11eb-bf75-c38993010fb7",
      title: "Tokyo, Japan",
      description: "Experience the perfect blend of modern skyscrapers and ancient traditions in Tokyo.",
      backgroundWidth: "100%",
      backgroundHeight: "300px",
    },
    {
      image: "https://deih43ym53wif.cloudfront.net/zermatt-matterhorn-switzerland-shutterstock_1298208013_44fea015e5.jpeg",
      title: "Alps, Switzerland",
      description: "Explore the snow-covered peaks and charming villages of the Alps, perfect for nature lovers.",
      backgroundWidth: "100%",
      backgroundHeight: "200px",
    },
    {
      image: "https://i.pinimg.com/originals/30/b5/bd/30b5bdaadbe89d0771eaa5f0745587ad.jpg",
      title: "Bali, Indonesia",
      description: "Relax and rejuvenate on Bali’s stunning beaches and explore its vibrant culture.",
      backgroundWidth: "100%",
      backgroundHeight: "300px",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-blue-50 via-white to-blue-50 py-16 px-6 md:px-16 lg:px-32">
      {/* Decorative Large Text */}
      <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none -mt-[3rem]">
        <p className="text-blue-600 text-[120px] md:text-[140px] font-extrabold uppercase tracking-widest opacity-10">
          Destinations
        </p>
      </div>
      {/* Main Content */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-6">
          Featured Destinations
        </h2>
        <p className="text-center text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
          Explore travel tips, hidden gems, and expert guides to <br />
          make your next adventure unforgettable.
        </p>
        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300 relative flex flex-col ${index === 3 || index === 5 ? 'transform translate-y-[-100px]' : ''}`}
              style={{
                width: destination.backgroundWidth,
                height: destination.backgroundHeight,
                backgroundImage: `url(${destination.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                objectFit: "cover", // Ensures the image maintains aspect ratio and avoids merging
              }}
            >
              {/* Arrow Icon with Background Circle */}
              <i className="ri-arrow-right-up-line text-black absolute top-2 right-2 text-1xl p-2 bg-white rounded-full shadow-lg"></i>
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-4 px-6 bg-gradient-to-t from-black via-transparent to-transparent">
                <h3 className="text-lg font-semibold">{destination.title}</h3>
                <p className="text-sm">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
