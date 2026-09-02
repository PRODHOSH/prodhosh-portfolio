import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Grotesk } from "next/font/google";
import "./globals.css";
import FloatingSocials from "@/components/FloatingSocials";
import DotGrid from "@/components/DotGrid";
import CalSetup from "@/components/CalSetup";
import FloatingHireMe from "@/components/FloatingHireMe";
import CustomCursor from "@/components/CustomCursor";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prodhosh VS | Full Stack Developer & AI Engineer",
  description: "Portfolio of Prodhosh VS, a passionate individual building scalable social and technical systems. Explore my projects, skills, and professional experience.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Prodhosh VS | Full Stack Developer & AI Engineer",
    description: "Portfolio of Prodhosh VS, building scalable social and technical systems.",
    url: "https://prodhosh.me",
    siteName: "Prodhosh VS Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-transparent text-white font-sans selection:bg-white/20 selection:text-white relative">
        <CustomCursor />
        <CalSetup />
        <DotGrid />
        <FloatingSocials />
        <FloatingHireMe />
        {children}
      </body>
    </html>
  );
}
