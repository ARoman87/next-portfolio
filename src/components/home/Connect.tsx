import { Card } from "@/components/ui/card";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import { SiGithub, SiLinkedin } from "react-icons/si";

type SocialLinks = Array<{
  href: string;

  icon: IconType;
}>;

export default function Connect() {
  const SOCIAL_LINKS: SocialLinks = [
    {
      href: "https://github.com/ARoman87",
      icon: SiGithub
    },
    {
      href: "mailto: angel427roman@gmail.com",
      icon: FaEnvelope
    },
    {
      href: "https://www.linkedin.com/in/aroman87/",
      icon: SiLinkedin
    }
  ];
  return (
    <Card className="min-h-[200px] w-full flex-1">
      <div className="flex h-full flex-col gap-6 rounded-xl p-4">
        <div className="flex items-center gap-2">
          <LinkIcon className="size-[18px]" />
          <h2 className="text-sm">Connect</h2>
        </div>
        <div className="flex h-full min-h-[200px] flex-1 items-center justify-center gap-4 px-2 md:min-h-[100px]">
          {SOCIAL_LINKS.map((link, index) => {
            const { href, icon } = link;

            const Icon = icon;

            return (
              <Link
                key={index}
                href={href}
                className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-black"
                target="_blank"
              >
                <Icon className="size-[32px]" />
              </Link>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
