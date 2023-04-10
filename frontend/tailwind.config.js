/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "xl": "0 5px 5px rgb(32, 37, 47, 0.5)",
      },
    },
  },
  plugins: [],
}
