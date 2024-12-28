import React, { useEffect, useState } from 'react';
import { IoSunny, IoMoon } from 'react-icons/io5';

const themes = ['light', 'dark'];

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    setTheme(savedTheme);
  }, []);

  return (
    <div className="inline-flex items-center p-1 rounded-3xl bg-orange-300 dark:bg-zinc-600">
      {themes.map((t) => (
        <button
          key={t}
          className={`${
            theme === t ? 'bg-white text-black' : ''
          } cursor-pointer rounded-3xl p-2`}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {t === 'light' ? <IoSunny /> : <IoMoon />}
        </button>
      ))}
    </div>
  );
}