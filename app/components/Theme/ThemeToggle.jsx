"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineNightlight, MdOutlineLightMode } from "react-icons/md";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? (
          <MdOutlineNightlight
            size={35}
            className="bg-[#786da7] rounded-full p-1 text-white"
          />
        ) : (
          <MdOutlineLightMode
            size={35}
            className="bg-[#786da7] rounded-full p-1 text-white"
          />
        )}
      </button>
    </>
  );
}
