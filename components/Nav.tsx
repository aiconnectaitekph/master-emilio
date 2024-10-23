"use client";

import { useLayoutEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export const Nav = () => {
  // Initialize dark mode as true by default
  const [isDarkMode, setIsDarkMode] = useState(true);

  useLayoutEffect(() => {
    const el = document.documentElement;
    // Ensure the 'dark' class is added on initial render
    el.classList.add("dark");
    setIsDarkMode(true);
  }, []);

  const toggleDark = () => {
    const el = document.documentElement;
    el.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={
        "px-4 py-2 flex items-center h-14 z-50 bg-card border-b border-border"
      }
    >
      {/* "aiConnect" text on the left side */}
      <div className="mr-auto text-lg font-semibold">
        aiConnect
      </div>
      
      {/* Dark/Light toggle button on the right side */}
      <div className="flex items-center">
        <Button
          onClick={toggleDark}
          variant="ghost"
          className="flex items-center gap-1.5"
        >
          {/* Icon changes based on the current theme */}
          {isDarkMode ? <Sun className="size-4" /> : <Moon className="size-4" />}
          {/* Text changes based on the current theme */}
          <span>{isDarkMode ? "Light" : "Dark"} Mode</span>
        </Button>
      </div>
    </div>
  );
};