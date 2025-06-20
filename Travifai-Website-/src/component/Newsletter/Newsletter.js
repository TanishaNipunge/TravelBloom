import React from 'react';

const Newsletter = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[80vh] flex flex-col justify-center items-center text-center px-4 md:px-8"
      style={{
        backgroundImage:
          "url('https://th.bing.com/th/id/R.303ac3cf2779aa0c43078a19c556c06b?rik=9B9uHcrsk%2by5ZA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f5%2ff%2f1%2f741144-download-himalayas-wallpaper-2560x1600-for-android-50.jpg&ehk=J9en8BA60DBkdLIQB0TMWzJt1i7tEHvPYZO4xwE%2fauY%3d&risl=&pid=ImgRaw&r=0')",
      }}
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black drop-shadow-lg mb-4">
        START YOUR ADVENTURE
      </h1>
      <p className="text-sm md:text-base lg:text-lg text-black mb-6 max-w-xl">
        Sign up for our newsletter and receive exclusive travel deals, insider tips, 
        and destination inspiration. Don’t miss out on the adventure. Join our mailing list today!
      </p>
      <form className="w-full max-w-md flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        />
        <button
          type="submit"
          className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-lg hover:bg-black focus:ring-2 focus:ring-blue-500 transition-all"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
