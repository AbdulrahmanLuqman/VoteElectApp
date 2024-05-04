/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Green: "#008000",
        lightGreen: "#2baa2b",
      },
    },
  },
  plugins: [],
};
