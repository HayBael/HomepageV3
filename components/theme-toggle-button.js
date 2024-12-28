import { IoSunny, IoMoon } from 'react-icons/io5';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? <IoSunny size={24} /> : <IoMoon size={24} />}
    </button>
  );
}