import React from "react";
import {
  HeroSection,
  ServicesSection,
  GrowthSection,
  ProjectsSection,
  WorkProcessPreview,
  CTASection,
  TechnologyStack,
  // Expertise,
} from "../components/Home";

import Expertise from "../components/Home/Expertise";
import FAQ from "../components/Home/HomeFAQ"

const Home = () => {
  return (
    //  classname="pt-10"
    <div>
      <HeroSection />
      <GrowthSection />
      <ServicesSection />
      <Expertise />
      {/* <ProjectsSection /> */}
      <TechnologyStack />
      <WorkProcessPreview />
      <CTASection />
      <FAQ/>
    </div>
  );
};

export default Home;
