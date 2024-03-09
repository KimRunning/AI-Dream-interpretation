/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        purple: "rgba(105, 47, 140, 1)",
        navy: "rgba(18, 28, 118, 1)",
        customBlack: "rgba(5, 15, 22, 0.25)",
        pink: "rgba(225, 195, 250, 1)",
        lightBlue: "rgba(83, 188, 248, 1)",
        lightGreen: "rgba(101, 232, 169, 1)",
        lightPurple: "rgba(213, 198, 237, 1)",
        cardPurple: "rgba(149, 122, 171, 1)",
        cardPink: "rgba(216, 159, 196, 1)",
        cardKhaki: "rgba(111, 98, 96, 1)",
        cardOrange: "rgba(225, 127, 56, 1)",
        cardYellow: "rgba(231, 225, 103, 1)",
        cardLightPink: "rgba(252, 227, 246, 1)",
        cardRed: "rgba(211, 74, 82, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
