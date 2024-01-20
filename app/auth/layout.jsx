import Navbar from "@/components/nav/navbar";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth Page Seeker",
  description: "Seek your dream job here",
};

export default function RootAuthLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
