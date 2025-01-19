import React from "react";
import TryEmailSection from "./conponent/TryEmailSection";
import HeroSection from "./conponent/HeroSection";
import ExtensionSection from "./conponent/ExtensionSection";
import ScreenSection from "./conponent/ScreenSection";
import Footer from "./conponent/Footer";

const App = () => {
  return (
    <>
      <HeroSection />
      <ExtensionSection />
      <ScreenSection />
      <TryEmailSection />
      <Footer />
    </>
  );
};

export default App;
