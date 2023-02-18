/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    // "./src/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/bg-cards.jpeg')",
        second: "url('/cards-2.jpeg')",
      },
      fontFamily: {
        primary: ["var(--inter-font)", "sans-serif"],
      },
      gridTemplateRows: {
        layout: "repeat(5, minmax(255px, 255px))",
      },
      backgroundPosition: {
        "top-1": "center top 5rem",
      },
    },
  },
  plugins: [],
};
