/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      background: "#f9f3ee",
      "background-secondary": "#e8e1d6",
      foreground: "#2c1810",
      primary: "#daaa63",
      "primary-dark": "#d59534",
      "primary-text": "#ffffff",
      secondary: "#C55212",
      control: "#E5DED1",
      danger: "#FF1A1A",
      "danger-dark": "#e00",
      "danger-text": "#fff",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
