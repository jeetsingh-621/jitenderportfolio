import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Cursor from "@/components/ui/Cursor";

export const metadata: Metadata = {
  title: "Jitender — Frontend Developer",
  description:
    "Frontend Developer building responsive, high-performance web apps with React.js, Next.js & animations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white font-body antialiased">
        {/* Global Components - Fixed at Root level for absolute stickiness */}
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
