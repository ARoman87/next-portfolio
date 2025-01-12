import { Marquee } from "@/components/ui/marquee";
import { FiZap } from "react-icons/fi";

import { Card } from "@/components/ui/card";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiCloudflare,
  SiDrizzle,
  SiFigma,
  SiFirebase,
  SiGit,
  SiMarkdown,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRadixui,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiVite,
  SiVitest
} from "react-icons/si";

export default function StacksCard() {
  return (
    <Card className="relative w-[400px] overflow-hidden">
      {/* Gradient overlay for fading effect */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="dark:from-background absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="dark:from-background absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />
      </div>

      <div className="flex h-60 flex-col gap-2 overflow-hidden rounded-xl">
        <div className="flex items-center gap-2 p-4">
          <FiZap className="size-[18px]" />
          <h2 className="text-sm">Skills</h2>
        </div>
        <Marquee className="gap-20 py-4" pauseOnHover>
          <FaHtml5 className="size-10" />
          <FaCss3 className="size-10" />
          <IoLogoJavascript className="size-10" />
          <BiLogoTypescript className="size-10" />
          <SiFigma className="size-10" />
          <SiTailwindcss className="size-10" />
          <SiNextdotjs className="size-10" />
          <SiReact className="size-10" />
          <SiPython className="size-10" />
          <SiPostgresql className="size-10" />
          <SiRadixui className="size-10" />
        </Marquee>
        <Marquee className="py-4" reverse pauseOnHover>
          <SiPrisma className="size-10" />
          <SiMysql className="size-10" />
          <SiFirebase className="size-10" />
          <SiGit className="size-10" />
          <SiVite className="size-10" />
          <SiDrizzle className="size-10" />
          <SiCloudflare className="size-10" />
          <SiMarkdown className="size-10" />
          <SiVitest className="size-10" />
          <SiNodedotjs className="size-10" />
          <SiReactquery className="size-10" />
        </Marquee>
      </div>
    </Card>
  );
}
