import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    console.log('Initial theme:', theme); // Debug log
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;