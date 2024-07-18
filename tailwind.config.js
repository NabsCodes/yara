/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // or 'media' or 'class'
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 60px 0 rgba(9, 55, 130, 0.12)",
        shadow:
          "0px 16px 30px 0 rgb(0.21176470816135406 0.13725490868091583 0.47843137383461 / 0.30)",
      },
    },
  },
  plugins: [],
};
