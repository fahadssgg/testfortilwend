/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "react-logo": "spin 10s linear infinite",
      },
      colors: {
        "fahad-color": "rgb(15,24,43)",
      },
    },
  },
  plugins: [],
};
