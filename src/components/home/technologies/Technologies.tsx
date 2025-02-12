import { BentoCard } from "@/components/ui/bento-card";
import { AnimatedBeamMultipleOutputDemo } from "./AnimatedBeam";

export default function Technologies() {
  const data = {
    name: "Technologies",
    description: "Current technologies I'm currently working with to develop high-performance applications.",
    className: "",
    href: "/technologies",
    cta: "View All Technologies",
    background: <AnimatedBeamMultipleOutputDemo className="absolute" />
  };
  return <BentoCard {...data} className="min-h-[400px] lg:w-1/2" />;
}
