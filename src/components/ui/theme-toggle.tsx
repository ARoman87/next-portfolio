"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <button
        className="flex h-8 w-14 items-center rounded-full bg-[#FAE9B1] shadow transition duration-300 focus:outline-none dark:bg-gray-600"
        onClick={() => {
          if (theme === "dark") {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      >
        <motion.div
          className="relative flex h-7 w-7 items-center justify-center rounded-full p-1 text-white"
          initial={false}
          animate={{
            x: theme === "dark" ? 26 : 1,
            backgroundColor: theme === "dark" ? "#374151" : "#FBBF24" // Dark background for moon, yellow for sun
          }}
          transition={{
            type: "spring", // Add a smooth spring transition for more natural movement
            stiffness: 400,
            damping: 30
          }}
        >
          {theme === "dark" ? <IoMoonOutline size={18} /> : <IoSunnyOutline size={20} className="text-orange-600" />}
        </motion.div>
      </button>
    )
  );
}
