import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="relative h-full min-h-screen"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
