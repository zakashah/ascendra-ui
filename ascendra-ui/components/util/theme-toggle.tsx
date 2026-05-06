'use client';

import { useEffect, useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <button
      data-slot="theme-toggle"
      type="button"
      onClick={() => setIsDarkMode((prev) => !prev)}
      className="focus-visible:outline-primary bg-background border-border flex min-h-7 min-w-7 cursor-pointer items-center justify-center rounded-full border focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {isDarkMode ? (
        <LuMoon className="size-3.5 text-gray-400" />
      ) : (
        <LuSun className="size-3.5 text-gray-400" />
      )}
    </button>
  );
}
