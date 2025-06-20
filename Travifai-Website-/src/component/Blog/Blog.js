import React from 'react';

const Blog = () => {
  return (
    <div>
      <section className="relative bg-white py-16 px-4 md:px-10 lg:px-20">
        {/* "Travel Blog" Text at the Top */}
        <div className="absolute top-0 left-10 w-full flex justify-center pointer-events-none -mr-[2.5rem]">
          <p className="text-blue-600 text-[150px] md:text-[120px] font-extrabold uppercase tracking-widest opacity-20">
            Travel Blog
          </p>
        </div>
        {/* Main Content */}
        <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-center mb-4">
          Explore Travel Tips & Latest Trends
        </h2>
        {/* Spacer */}
        <div className="h-28"></div>
        <p className="relative z-10 text-center text-gray-600 mb-12">
          Explore Travel Tips, Hidden Gems, and Expert Guides to
          <br />
          Make Your Next Adventure Unforgettable.
        </p>

        <div className="container max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="/"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <img
              src="https://cdn.tourradar.com/s3/serp/original/2147_iyMRxiWm.jpg"
              alt=""
              className="object-cover w-full h-64 rounded-lg sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Travel is the only thing you buy that makes you richer.
              </h3>

              <p>
                Travel is the only thing you buy that makes you richer suggests that the experiences and memories gained from travel enhance your life in ways that material possessions cannot. It emphasizes that the value of travel lies in personal growth, cultural understanding, and lasting memories, which contribute to a richer, more fulfilling life. Each journey offers unique lessons and perspectives, allowing you to connect with diverse cultures and people. Ultimately, the wealth gained from travel is measured not in currency, but in the richness of experiences that shape who you are.
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-xs dark:text-gray-600">February 19, 2025 8 min read</span>
                <button className="bg-blue-600 text-white rounded-full p-2 flex items-center">
<i class="ri-arrow-right-up-line"></i>
                </button>
              </div>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a
              rel="noopener noreferrer"
              href="/"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded-lg h-44 dark:bg-gray-500"
                src="https://wallpapercave.com/wp/wp2009439.jpg"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xs dark:text-gray-600">January 21, 2021</span>
                  <button className="bg-blue-600 text-white rounded-full p-2 flex items-center">
  <i class="ri-arrow-right-up-line"></i>
                  </button>
                </div>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has
                  tantas percipit perfecto. At per tempor albucius perfecto, ei probatus
                  consulatu patrioque mea, ei vocent delicata indoctum pri.
                </p>
              </div>
            </a>
            {/* Repeat for other cards */}
            <a
              rel="noopener noreferrer"
              href="/"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded-lg h-44 dark:bg-gray-500"
                src="https://pxwall.com/wp-content/uploads/2018/06/Wallpaper%20Sultan%20Ahmed%20Mosque,%20Turkey,%20Istanbul,%20sunrise,%204k,%20Travel%2041092120.jpg"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xs dark:text-gray-600">January 22, 2021</span>
                  <button className="bg-blue-600 text-white rounded-full p-2 flex items-center">
  <i class="ri-arrow-right-up-line"></i>
                  </button>
                </div>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has
                  tantas percipit perfecto. At per tempor albucius perfecto, ei probatus
                  consulatu patrioque mea, ei vocent delicata indoctum pri.
                </p>
              </div>
            </a>
            {/* Repeat for other cards */}
            <a
              rel="noopener noreferrer"
              href="/"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded-lg h-44 dark:bg-gray-500"
                src="https://wallpaperset.com/w/full/2/1/7/71518.jpg"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xs dark:text-gray-600">January 22, 2021</span>
                  <button className="bg-blue-600 text-white rounded-full p-2 flex items-center">
  <i class="ri-arrow-right-up-line"></i>
                  </button>
                </div>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has
                  tantas percipit perfecto. At per tempor albucius perfecto, ei probatus
                  consulatu patrioque mea, ei vocent delicata indoctum pri.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
