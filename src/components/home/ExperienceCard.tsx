import { BentoCard } from "../ui/bento-card";

export default function ExperienceCard() {
  const data = {
    name: "Experience",
    description: "A diverse professional journey spanning military service, various industries, and software engineering expertise.",
    className: "",
    href: "/experience",
    cta: "View All Experience",
    background: <div>Experience</div>
  };
  return <BentoCard {...data} className="min-h-[400px] lg:w-1/2" />;
}
