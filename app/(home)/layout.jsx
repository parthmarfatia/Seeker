import Navbar from "@/components/nav/navbar";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Page Seeker",
  description: "Seek your dream job here",
};

export default function RootHomeLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
