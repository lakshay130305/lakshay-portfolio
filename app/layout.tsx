import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lakshay Kathpalia — AI/ML Engineer & Full-Stack Developer",
  description:
    "Portfolio of Lakshay Kathpalia — B.Tech CS (AI & ML) student, full-stack developer and machine-learning enthusiast based in Gurgaon, India.",
  keywords: [
    "Lakshay Kathpalia",
    "AI Engineer",
    "Machine Learning",
    "Full-Stack Developer",
    "React",
    "Flask",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Lakshay Kathpalia" }],
  openGraph: {
    title: "Lakshay Kathpalia — AI/ML Engineer & Full-Stack Developer",
    description:
      "B.Tech CS (AI & ML) student, full-stack developer and machine-learning enthusiast.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}>
      <body className="noise antialiased">{children}</body>
    </html>
  );
}
