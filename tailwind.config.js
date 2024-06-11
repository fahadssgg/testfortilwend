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
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d6d3d1",

          secondary: "#fce7f3",

          accent: "#fce7f3",

          neutral: "#bef264",

          "base-100": "#8b5cf6",

          info: "#0ea5e9",

          success: "#00ff00",

          warning: "#facc15",

          error: "#991b1b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
