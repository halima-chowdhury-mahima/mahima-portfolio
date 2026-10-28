
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Mahima Chowdhury | Full Stack Web Developer",
  description:
    "Portfolio of Halima Chowdhury Mahima, a Full Stack Web Developer building modern, responsive, and user-friendly digital experiences with React, Next.js, and TypeScript.",
  keywords: [
    "Mahima Chowdhury",
    "Full Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Development Portfolio",
  ],
  authors: [{ name: "Mahima Chowdhury" }],
  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
