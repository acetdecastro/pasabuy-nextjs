"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/_components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      aria-label="Toggle theme"
      className="select-none"
    >
      {/* {isDarkMode ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      )} */}
      {isDarkMode ? (
        <span className="text-lg md:text-xl">🌞</span>
      ) : (
        <span className="text-lg md:text-xl">🌙</span>
      )}
    </Button>
  );
}
