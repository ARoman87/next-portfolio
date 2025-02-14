"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/container";
import ThemeToggle from "../ui/theme-toggle";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <div className="fixed z-50 flex h-16 w-full items-center justify-center bg-white/70 shadow-md backdrop-blur-lg dark:bg-background/70">
      <div className="pointer-events-auto w-full">
        <Container>
          <div className="flex items-center justify-between">
            <Link href={"/"} className="flex items-center space-x-2">
              <Image src={theme === "light" ? "/images/ARLogo-black.png" : "/images/ARLogo-white.png"} alt="Logo" width={50} height={50} />
              <p className="font-oswald text-xl uppercase">Angel Roman</p>
            </Link>
            <ThemeToggle />
          </div>
        </Container>
      </div>
    </div>
  );
}
