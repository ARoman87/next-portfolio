"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { Container } from "../ui/container";
import Connect from "./Connect";
import DarkMode from "./DarkMode";
import ExperienceCard from "./ExperienceCard";
import LocationCard from "./LocationCard";
import Me from "./Me";
import ProjectsCard from "./ProjectsCard";
import RobotAnimation from "./RobotAnimation";
import Skills from "./Skills";
import SplashScreen from "./SplashScreen";

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
          {/* <Hero />
          <AboutMeSection />
          <Experience /> */}
          <Container>
            <div className="space-y-4 pt-20">
              <Me />
              <LocationCard />
              <DarkMode />

              <RobotAnimation />

              <Connect />
              <ExperienceCard />
              <ProjectsCard />
              <Skills />
            </div>
          </Container>
        </motion.div>
      )}
    </div>
  );
}
