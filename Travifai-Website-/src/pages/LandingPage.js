import React from "react";

import HeroSection from "../component/Herosection/Herosection";
import TravelPartner from "../component/TravelPartner/TravelPartner";
import Packages from "../component/Packages/Packages";
import FeaturedDestinations from "../component/Destinations/Destinations";
import Blog from "../component/Blog/Blog";
import AboutUs from "../component/AboutUs/AboutUs";
import Newsletter from "../component/Newsletter/Newsletter";
import Testimonials from "../component/Testimonials/Testimonials";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />

      <FeaturedDestinations />
      <TravelPartner />
      <Packages />
      <Testimonials />
      <Blog />
      <Newsletter />
    </div>
  );
};

export default LandingPage;
