import { useEffect, useState } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'light';
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    setTheme(newTheme);
  };

  return (
    <>
      <Component {...pageProps} toggleTheme={toggleTheme} theme={theme} />
    </>
  );
}

export default MyApp;