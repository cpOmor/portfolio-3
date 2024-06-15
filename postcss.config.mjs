/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // adjust this line to include all paths where Tailwind should look for classes
  ],
  theme: {
    extend: {
      colors: {
        backpoint: '#yourBackPointColor', // Add your custom color
      },
    },
  },
  plugins: [],
};

export default config;
