import { BiLogoTypescript } from "react-icons/bi";
import { FaAngular, FaAws, FaJava, FaNodeJs } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiCplusplus,
  SiDjango,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { Card } from "../ui/card";
import { Marquee } from "../ui/marquee";

export default function Skills() {
  return (
    <Card className="h-[450px] w-full flex-1 lg:w-[400px]">
      <div className="mb-4 flex items-center gap-2 p-4">
        <FiZap className="size-[18px]" />
        <h2 className="text-sm">Skills</h2>
      </div>

      <div className="mb-8">
        <h3 className="p-4">Confident</h3>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 z-10">
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent dark:from-background" />
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent dark:from-background" />
          </div>
          <Marquee className="gap-20 py-4" pauseOnHover>
            <SiNextdotjs className="size-14" />
            <BiLogoTypescript className="size-14" />
            <SiReact className="size-14" />
            <SiTailwindcss className="size-14" />
            <SiPrisma className="size-14" />
            <IoLogoJavascript className="size-14" />
            <SiMongodb className="size-14" />
            <SiPython className="size-14" />
            <TbBrandReactNative className="size-14" />
            <FaAws className="size-14" />
            <FaNodeJs className="size-14" />
            <FaAngular className="size-14" />
          </Marquee>
        </div>
      </div>
      <div>
        <h3 className="p-4">Familiar</h3>
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 z-10">
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent dark:from-background" />
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent dark:from-background" />
          </div>
          <Marquee className="py-4" reverse pauseOnHover>
            <FaJava className="size-14" />
            <SiCplusplus className="size-14" />
            <SiMysql className="size-14" />
            <SiFlask className="size-14" />
            <SiDjango className="size-14" />
            <SiPostgresql className="size-14" />
          </Marquee>
        </div>
      </div>
    </Card>
  );
}
