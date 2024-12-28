/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // File di folder pages
    './components/**/*.{js,ts,jsx,tsx}', // File di folder components
    './app/**/*.{js,ts,jsx,tsx}', // Folder app (jika digunakan)
  ],
  darkMode: 'class', // Mode gelap berbasis class
  theme: {
    extend: {
      screens: {
        // Tambahan breakpoints
        xs: '445px', // Untuk layar ekstra kecil
      },
      animation: {
        // Animasi tambahan
        'spin-slow': 'spin 2s linear infinite', // Animasi spin lebih lambat
      },
      colors: {
        // Warna kustom untuk mode terang dan gelap
        lightBackground: '#ffffff',
        darkBackground: '#1a202c',
        lightText: '#000000',
        darkText: '#ffffff',
      },
    },
  },
  plugins: [], // Tambahkan plugin jika dibutuhkan
}
