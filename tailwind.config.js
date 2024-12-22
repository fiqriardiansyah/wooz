/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#2B3991",
        "primary-orange": "#F7941D",
        "base": "#DFE9F1",
      },
      fontFamily: {
        "archivo": ["Archivo", "serif"],
        "inter": ["Inter", "serif"],
      },
      flex: {
        2: "2 2 0%"
      }
    },
  },
  plugins: [],
}

