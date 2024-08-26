"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export function ToggleTheme() {
  const { setTheme, theme } = useTheme();

  const isDarkMode = theme === "dark";

  return (
    <Button
      size="icon"
      className="size-8 p-0"
      variant="outline"
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
    >
      <SunIcon className="size-4 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
      <MoonIcon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Alternar tema</span>
    </Button>
  );
}
