"use client";

import React, { forwardRef, useRef } from "react";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div className={cn("relative flex h-full w-full items-center justify-center overflow-hidden p-10", className)} ref={containerRef}>
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16">
            <Icons.next />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-6">
          <Circle ref={div1Ref}>
            <Icons.react />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.typescript />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.mongo />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.prisma />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.vercel />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} duration={3} />
    </div>
  );
}

const Icons = {
  next: () => <Image src="/images/tech-stack/nextjs.svg" width={30} height={30} alt="Next.js" className="h-full w-auto" />,
  typescript: () => <Image src="/images/tech-stack/typescript.svg" width={30} height={30} alt="Typescript" className="h-full w-auto" />,
  mongo: () => <Image src="/images/tech-stack/mongo-fill.svg" width={30} height={30} alt="MongoDb" className="h-full w-full" />,
  prisma: () => <Image src="/images/tech-stack/prisma.svg" width={30} height={30} alt="Prisma" className="h-full w-full" />,
  vercel: () => <Image src="/images/tech-stack/vercel-fill.svg" width={30} height={30} alt="Vercel" className="h-full w-full" />,
  react: () => <Image src="/images/tech-stack/react.svg" width={30} height={30} alt="React" className="h-full w-full" />,

  messenger: () => (
    <svg width="100" height="100" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <radialGradient
        id="8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1"
        cx="11.087"
        cy="7.022"
        r="47.612"
        gradientTransform="matrix(1 0 0 -1 0 50)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#1292ff"></stop>
        <stop offset=".079" stopColor="#2982ff"></stop>
        <stop offset=".23" stopColor="#4e69ff"></stop>
        <stop offset=".351" stopColor="#6559ff"></stop>
        <stop offset=".428" stopColor="#6d53ff"></stop>
        <stop offset=".754" stopColor="#df47aa"></stop>
        <stop offset=".946" stopColor="#ff6257"></stop>
      </radialGradient>
      <path
        fill="url(#8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1)"
        d="M44,23.5C44,34.27,35.05,43,24,43c-1.651,0-3.25-0.194-4.784-0.564	c-0.465-0.112-0.951-0.069-1.379,0.145L13.46,44.77C12.33,45.335,11,44.513,11,43.249v-4.025c0-0.575-0.257-1.111-0.681-1.499	C6.425,34.165,4,29.11,4,23.5C4,12.73,12.95,4,24,4S44,12.73,44,23.5z"
      />
      <path
        d="M34.992,17.292c-0.428,0-0.843,0.142-1.2,0.411l-5.694,4.215	c-0.133,0.1-0.28,0.15-0.435,0.15c-0.15,0-0.291-0.047-0.41-0.136l-3.972-2.99c-0.808-0.601-1.76-0.918-2.757-0.918	c-1.576,0-3.025,0.791-3.876,2.116l-1.211,1.891l-4.12,6.695c-0.392,0.614-0.422,1.372-0.071,2.014	c0.358,0.654,1.034,1.06,1.764,1.06c0.428,0,0.843-0.142,1.2-0.411l5.694-4.215c0.133-0.1,0.28-0.15,0.435-0.15	c0.15,0,0.291,0.047,0.41,0.136l3.972,2.99c0.809,0.602,1.76,0.918,2.757,0.918c1.576,0,3.025-0.791,3.876-2.116l1.211-1.891	l4.12-6.695c0.392-0.614,0.422-1.372,0.071-2.014C36.398,17.698,35.722,17.292,34.992,17.292L34.992,17.292z"
        opacity=".05"
      />
      <path
        d="M34.992,17.792c-0.319,0-0.63,0.107-0.899,0.31l-5.697,4.218	c-0.216,0.163-0.468,0.248-0.732,0.248c-0.259,0-0.504-0.082-0.71-0.236l-3.973-2.991c-0.719-0.535-1.568-0.817-2.457-0.817	c-1.405,0-2.696,0.705-3.455,1.887l-1.21,1.891l-4.115,6.688c-0.297,0.465-0.32,1.033-0.058,1.511c0.266,0.486,0.787,0.8,1.325,0.8	c0.319,0,0.63-0.107,0.899-0.31l5.697-4.218c0.216-0.163,0.468-0.248,0.732-0.248c0.259,0,0.504,0.082,0.71,0.236l3.973,2.991	c0.719,0.535,1.568,0.817,2.457,0.817c1.405,0,2.696-0.705,3.455-1.887l1.21-1.891l4.115-6.688c0.297-0.465,0.32-1.033,0.058-1.511	C36.051,18.106,35.531,17.792,34.992,17.792L34.992,17.792z"
        opacity=".07"
      />
      <path
        fill="#ffffff"
        d="M34.394,18.501l-5.7,4.22c-0.61,0.46-1.44,0.46-2.04,0.01L22.68,19.74	c-1.68-1.25-4.06-0.82-5.19,0.94l-1.21,1.89l-4.11,6.68c-0.6,0.94,0.55,2.01,1.44,1.34l5.7-4.22c0.61-0.46,1.44-0.46,2.04-0.01	l3.974,2.991c1.68,1.25,4.06,0.82,5.19-0.94l1.21-1.89l4.11-6.68C36.434,18.901,35.284,17.831,34.394,18.501z"
      />
    </svg>
  ),
  user: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
};
