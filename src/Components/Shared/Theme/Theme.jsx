import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-10 h-10 flex items-center justify-center rounded-full 
                 transition-all duration-300 
                 bg-gray-200 dark:bg-gray-700
                 shadow-md hover:scale-110 relative"
    >
      <Sun
        className={`absolute w-6 h-6 transition-all duration-300 
          ${theme === "dark" ? "opacity-0 scale-50" : "opacity-100 scale-100"}`}
      />

      <Moon
        className={`absolute w-6 h-6 transition-all duration-300
          ${
            theme === "light" ? "opacity-0 scale-50" : "opacity-100 scale-100"
          }`}
      />
    </button>
  );
}
