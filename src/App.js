import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TestimonialSection from "./components/TestimonialSection";
import ChefBioSection from "./components/ChefBioSection";
import ClassOptionsSection from "./components/ClassOptionsSection";
import WhatsCookingSection from "./components/WhatsCookingSection";
import ClassDescriptionSection from "./components/ClassDescriptionSection";
import ContactFormSection from "./components/ContactFormSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ChefBioSection />
      <ClassOptionsSection />
      <WhatsCookingSection />
      <ClassDescriptionSection />
      <TestimonialSection />
      <ContactFormSection />
      <FooterSection />
    </div>
  );
}

export default App;
