import React from "react";

const TravelPackages = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-10 bg-gray-50">
      {/* Text Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h4 className="text-[#550FE4] text-sm font-medium">
          Os melhores pacotes separados para você
        </h4>
        <h2 className="text-3xl font-bold text-[#550FE4] mt-2">
          Pacotes completos com muita economia
        </h2>
        <p className="text-gray-600 mt-4">
          Incluso voos, hotel, parques, transfer e seguro viagem.
        </p>
        <button className="mt-6 px-6 py-3 text-white bg-[#550FE4] rounded-lg hover:bg-[#3F0BB2] transition">
          Ver mais pacotes
        </button>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-2 gap-4 md:w-1/2">
        {/* Image Card 1 */}
        <div className="relative">
          <img
            src="https://www.solitarytraveller.com/wp-content/uploads/2020/07/reason_best_travel_spot_banner-min.jpg" // Replace with actual image URL
            alt="Disney, Orlando"
            className="rounded-lg shadow-lg"
          />
          <span className="absolute top-2 left-2 bg-white text-gray-800 text-sm px-2 py-1 rounded shadow">
            Disney, Orlando
          </span>
        </div>

        {/* Image Card 2 */}
        <div className="relative">
          <img
            src="https://th.bing.com/th/id/R.cf8563f99d35bbb586d128fcd9e5df22?rik=SpnxUE2pNUyoqQ&riu=http%3a%2f%2fmedia2.popsugar-assets.com%2ffiles%2fthumbor%2fOS81vOwzdZ9NZBYiS8ZPrs4jz5Q%3d%2ffit-in%2f1024x1024%2f2014%2f02%2f17%2f843%2fn%2f1922441%2f188193e9a2917c8e_thumb_temp_image215902961329390326.jpg&ehk=O5vpmF1IL5b3eczcZyeiQ8aeByLNaYOmGx9VN4wJwEQ%3d&risl=&pid=ImgRaw&r=0" // Replace with actual image URL
            alt="Punta Cana"
            className="rounded-lg shadow-lg"
          />
          <span className="absolute top-2 left-2 bg-white text-gray-800 text-sm px-2 py-1 rounded shadow">
            Punta Cana
          </span>
        </div>

        {/* Image Card 3 */}
        <div className="relative">
          <img
            src="https://th.bing.com/th/id/OIP.43AMCukKFHlCWU_SIcISXQAAAA?rs=1&pid=ImgDetMain" // Replace with actual image URL
            alt="Nova York"
            className="rounded-lg shadow-lg"
          />
          <span className="absolute top-2 left-2 bg-white text-gray-800 text-sm px-2 py-1 rounded shadow">
            Nova York
          </span>
        </div>

        {/* Image Card 4 */}
        <div className="relative">
          <img
            src="https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg" // Replace with actual image URL
            alt="Foz do Iguaçu"
            className="rounded-lg shadow-lg"
          />
          <span className="absolute top-2 left-2 bg-white text-gray-800 text-sm px-2 py-1 rounded shadow">
            Foz do Iguaçu
          </span>
        </div>
      </div>
    </div>
  );
};

export default TravelPackages;
