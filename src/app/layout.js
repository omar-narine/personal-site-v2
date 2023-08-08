import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Omar Narine",
  description: "A cohesive place to learn about me and what I'm working on",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        {children}
        <SocialLinks />
      </body>
    </html>
  );
}