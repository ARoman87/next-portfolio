"use client";
import { motion, useScroll } from "framer-motion";
import React, { JSX, useEffect, useRef, useState } from "react";
import { FaCode } from "react-icons/fa6";

interface TimelineEntry {
  company: string;
  dates: string;
  jobTitle: string;
  content: React.ReactNode;
  icon: JSX.Element;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.offsetHeight;
        setContainerHeight(height);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="w-full overflow-hidden font-sans md:overflow-visible md:px-10">
      <div className="mx-4 flex flex-col items-center">
        <h1 className="mb-6 flex items-center gap-2 text-2xl text-blue-500">
          <FaCode />
          Experience
        </h1>
      </div>

      <div ref={containerRef} className="relative mx-auto max-w-7xl pb-20">
        <div className="absolute left-4 top-0 hidden h-full w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700 md:left-8 md:block">
          <motion.div
            className="hidden h-full w-full origin-top bg-gradient-to-b from-purple-500 via-blue-500 to-transparent md:block"
            style={{
              scaleY: scrollYProgress
            }}
          />
        </div>

        {data.map((item, index) => (
          <div key={index} className="mx-4 flex flex-col justify-start pt-10 md:mx-0 md:flex-row md:gap-4">
            <div className="sticky top-40 z-40 flex flex-col items-center self-start md:w-full md:flex-row">
              <div className="absolute left-3 hidden h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-background md:left-3 md:flex">
                <div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
              </div>
              <div className="md:pl-20">
                <h3 className="hidden bg-gradient-to-r from-white to-[#767676] bg-clip-text py-2 text-xl font-bold text-transparent md:block md:text-5xl">
                  {item.dates}
                </h3>
                <h4 className="text-2xl font-semibold">{item.company}</h4>
                <h4 className="">{item.jobTitle}</h4>
              </div>
            </div>

            <div className="relative min-h-[400px] w-full md:pl-4 md:pr-4">
              <h3 className="mb-4 block w-full bg-gradient-to-r from-white to-[#767676] bg-clip-text py-2 text-left text-2xl font-bold text-transparent md:hidden">
                {item.company}
              </h3>
              <div className="p-4">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
