import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lakshay Kathpalia — AI/ML Intern & Full-Stack Developer",
  description:
    "Portfolio of Lakshay Kathpalia — AI/ML intern at Publicis Sapient, B.Tech CS (AI & ML) student, full-stack developer based in Gurgaon, India.",
  keywords: [
    "Lakshay Kathpalia",
    "AI Engineer",
    "Machine Learning",
    "Knowledge Graphs",
    "Full-Stack Developer",
    "React",
    "Flask",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Lakshay Kathpalia" }],
  openGraph: {
    title: "Lakshay Kathpalia — AI/ML Intern & Full-Stack Developer",
    description:
      "AI/ML intern at Publicis Sapient. B.Tech CS (AI & ML), full-stack developer and machine-learning enthusiast.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jetbrains.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
