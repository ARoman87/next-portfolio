"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { Container } from "../ui/container";
import Connect from "./Connect";
import ExperienceCard from "./ExperienceCard";
import LocationCard from "./LocationCard";
import Me from "./Me";
import RobotAnimation from "./RobotAnimation";
import SplashScreen from "./SplashScreen";
import Technologies from "./technologies/Technologies";

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
          <Container>
            <div className="space-y-4 py-20">
              <div className="flex flex-col flex-wrap gap-4 md:flex-row">
                <Me />
                <div className="flex flex-1 flex-col gap-4">
                  <LocationCard />
                  <Connect />
                </div>
                <RobotAnimation />
              </div>
              <div className="flex flex-col gap-4 lg:flex-row">
                <Technologies />
                <ExperienceCard />

                {/* <div className="flex h-[450px] w-full flex-1 flex-col gap-4 lg:w-[400px]">

                  <ProjectsCard />
                </div> */}
              </div>
            </div>
          </Container>
        </motion.div>
      )}
    </div>
  );
}
