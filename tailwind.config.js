/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        xs360: "360px",
        sm480: "480px",
      },
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"], // Add Google Fonts or default options
        manrope: ["Manrope"],
        custom: ["MyFont", "sans-serif"], // Add a custom font
        grace: ['"Covered By Your Grace"', 'cursive'],
      },
    },
  },
  plugins: [],
};
