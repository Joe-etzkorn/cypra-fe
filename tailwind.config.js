/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", "sans-serif"],
      },
    },
    screens: {
      "2xl": "2560px",
      xl: "1440px",
      lg: "1024px",
      md: "768px",
      sm: "640px",
    },
  },
  plugins: [],
};
