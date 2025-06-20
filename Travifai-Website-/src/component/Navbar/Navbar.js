import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsSidebarOpen(false); // Close sidebar when a link is clicked
  };

  return (
    <div>
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-gray-900 bg-opacity-90 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <a
              href="/"
              className="text-4xl font-extrabold text-white tracking-wide"
            >
              Travifai
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-12">
              {[
                "Home",
                "About Us",
                "Blogs",
                "Offers",
                "Blog",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.replace(" ", "").toLowerCase()}`}
                  onClick={() => handleLinkClick(item)}
                  className={`text-white font-semibold text-xl hover:text-gray-300 transition duration-300 ${
                    activeLink === item ? "border-b-2 border-white" : ""
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Contact Us Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="text-white font-semibold px-8 py-3 rounded-full border border-white bg-transparent hover:bg-white hover:text-gray-900 transition duration-300 text-xl"
              >
                Contact Us
              </a>
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-white focus:outline-none"
                onClick={toggleSidebar}
                aria-label="Toggle navigation"
              >
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 bg-opacity-95 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col p-8 space-y-10">
          {/* Close Button */}
          <button
            className="self-end text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              className="h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Sidebar Links */}
          {[
            "About Us",
            "Blogs",
            "Alerts",
            "Blog",
            "Contact Us",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.replace(" ", "").toLowerCase()}`}
              onClick={() => handleLinkClick(item)}
              className={`text-lg font-medium hover:text-gray-300 transition duration-300 ${
                activeLink === item ? "border-b-2 border-white" : ""
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
