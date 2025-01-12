"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Experience from "./Experience";
import Hero from "./Hero";
import SplashScreen from "./SplashScreen";
import AboutMeSection from "./about/AboutMeSection";

export default function LandingPage() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2800);
  };
  return (
    <div>
      <AnimatePresence>{showSplash && <SplashScreen onAnimationComplete={handleSplashComplete} />}</AnimatePresence>
      {!showSplash && (
        <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          <Hero />
          <AboutMeSection />
          <Experience />
        </motion.div>
      )}
    </div>
  );
}
