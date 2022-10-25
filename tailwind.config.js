/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['interstate', 'sans-serif'],
    },
    extend: {
      colors: {
        texacoRed: '#da291c',
        caltexBlue: '#004c60',
      },
    },
  },
  plugins: [],
};
