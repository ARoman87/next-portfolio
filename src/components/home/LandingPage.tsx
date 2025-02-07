"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { Container } from "../ui/container";
import Connect from "./Connect";
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
    <div className="pt-10">
      <AnimatePresence>{showSplash && <SplashScreen onAnimationComplete={handleSplashComplete} />}</AnimatePresence>
      {!showSplash && (
        <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          {/* <Hero />
          <AboutMeSection />
          <Experience /> */}
          <Container>
            <div className="space-y-4 py-20">
              <div className="flex flex-col gap-4 lg:flex-row">
                <Me />
                <LocationCard />
                <Connect />
              </div>
              <div className="flex flex-1 flex-wrap gap-4">
                <Skills />

                <RobotAnimation />
                <div className="flex h-[450px] w-full flex-1 flex-col gap-4 lg:w-[400px]">
                  <ExperienceCard />
                  <ProjectsCard />
                </div>
              </div>
            </div>
          </Container>
        </motion.div>
      )}
    </div>
  );
}
