/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "hsl(180, 66%, 49%)",
        "primary-200": "hsl(257, 27%, 26%)",
        "secondary-100": "hsl(0, 87%, 67%)",
        "neutral-100": "hsl(0, 0%, 75%)",
        "neutral-200": "hsl(257, 7%, 63%)",
        "neutral-300": "hsl(255, 11%, 22%)",
        "neutral-400": "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
