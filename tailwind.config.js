/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Zain"],
      },
      colors: {
        yellow: "var(--yellow-rgb)",
        "light-blue": "var(--light-blue-rgb)",
        purple: "var(--purple-rgb)",
        sapphire: "var(--sapphire-rgb)",
        turquoise: "var(--turquoise-rgb)",
        blue: "var(--blue-rgb)",
        emerald: "var(--emerald-rgb)",
        amethyst: "var(--amethyst-rgb)",
      },
    },
  },
  plugins: [],
};
