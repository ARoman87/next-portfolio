import { Card } from "@/components/ui/card";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import { IconType } from "react-icons/lib";
import { SiFacebook, SiGithub, SiInstagram, SiX, SiYoutube } from "react-icons/si";

type SocialLinks = Array<{
  href: string;
  title: string;
  icon: IconType;
}>;

export default function Connect() {
  const SOCIAL_LINKS: SocialLinks = [
    {
      href: "/",
      title: "GitHub",
      icon: SiGithub
    },
    {
      href: "/",
      title: "Facebook",
      icon: SiFacebook
    },
    {
      href: "/",
      title: "Instagram",
      icon: SiInstagram
    },
    {
      href: "/",
      title: "X",
      icon: SiX
    },
    {
      href: "/",
      title: "YouTube",
      icon: SiYoutube
    }
  ];
  return (
    <Card className="w-[400px]">
      <div className="flex flex-col gap-6 rounded-xl p-4 lg:p-6">
        <div className="flex items-center gap-2">
          <LinkIcon className="size-[18px]" />
          <h2 className="text-sm">Connect</h2>
        </div>
        <div className="flex flex-col gap-4 px-2">
          {SOCIAL_LINKS.map((link, index) => {
            const { href, title, icon } = link;

            const Icon = icon;

            return (
              <Link
                key={index}
                href={href}
                className="text-muted-foreground hover:text-foreground flex w-fit items-center gap-3 transition-colors"
              >
                <Icon className="size-[18px]" />
                <h3>{title}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
