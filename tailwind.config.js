/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
      },
      colors: {
        dark: "#0f172a",
        primary: "#38bdf8",
        accent: "#7dd3fc",
      },
      boxShadow: {
        glow: "0 0 20px rgba(56, 189, 248, 0.5)",
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
