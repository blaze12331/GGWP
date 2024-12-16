import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import AdoptionCards from "./components/AdoptionCards";
import HelpPage from "./components/HelpPage";
import Stories from "./components/Stories";
import Events from "./components/Events";
import DonatePage from "./components/DonatePage"; // Import DonatePage

const App = () => {
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY && lastScrollY > 200) {
        const heroSection = document.getElementById("hero-section");
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: "smooth" });
        }
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection id="hero-section" />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/for-adoption" element={<AdoptionCards />} />
          <Route path="/help-page" element={<HelpPage />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donate" element={<DonatePage />} /> {/* Add DonatePage */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
