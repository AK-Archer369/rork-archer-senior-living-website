/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C5530',
        'primary-dark': '#1A3D1E',
        'primary-light': '#3A7040',
        secondary: '#D4AF37',
        'secondary-light': '#E8C84A',
        background: '#F9F8F6',
        surface: '#FFFFFF',
        text: '#2D2D2D',
        'text-light': '#555555',
        'text-lighter': '#888888',
        border: '#E0E0E0',
        error: '#D32F2F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
