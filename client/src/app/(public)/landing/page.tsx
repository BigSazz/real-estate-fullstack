import React from "react";
import HeroSection from "./_components/HeroSection";
import FeaturesSection from "./_components/FeaturesSection";
import DiscoverSection from "./_components/DiscoverSection";
import CallToActionSection from "./_components/CallToActionSection";
import FooterSection from "./_components/FooterSection";

const Landing = () => {
  return (
    <>
      <div>
        <HeroSection />
        <FeaturesSection />
        <DiscoverSection />
        <CallToActionSection />
        <FooterSection />
      </div>
    </>
  );
};

export default Landing;
