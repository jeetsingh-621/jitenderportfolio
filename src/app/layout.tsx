import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
