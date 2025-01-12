import ContactSidebar from "@/components/core/ContactSidebar";
import Navbar from "@/components/core/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Angel Roman | Software Engineer & Tech Leader",
  description:
    "Showcasing my expertise in full-stack development, innovative software solutions, and leadership in tech. Explore my portfolio to see projects, skills, and experience that drive impactful digital transformations."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased`}>
        <Analytics />
        <SpeedInsights />
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange defaultTheme="light">
          <Navbar />
          {children}
          <ContactSidebar />
        </ThemeProvider>
      </body>
    </html>
  );
}
