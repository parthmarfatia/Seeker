"use client";

import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="flex flex-row items-center justify-between px-3 py-4 sm:px-6 md:px-12">
      <div className="items-start space-x-5">
        <Link
          className="flex flex-row items-center space-x-4 text-2xl font-extrabold tracking-tight text-secondary-900 dark:text-secondary-50"
          href="/"
        >
          Seeker
        </Link>
      </div>
      <ul className="flex flex-row items-center justify-between space-x-2">
        {/* Theme Toggle */}
        <li>
          {currentTheme === "dark" ? (
            <Button variant="ghost" onClick={() => setTheme("light")}>
              <Sun />
            </Button>
          ) : (
            <Button variant="ghost" onClick={() => setTheme("dark")}>
              <Moon />
            </Button>
          )}
        </li>

        <li>
          <Button>
            Sign in
          </Button>
         
        </li>
        <li>
        <Button variant="outline">
            Sign in
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
