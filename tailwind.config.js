/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      background: "#FBFDFC",
      "on-background": "#191C1C",
      primary: "#00696E",
      "on-primary": "#FFFFFF",
      "on-primary-container": "#002022",
      error: "#BA1B1B",
      "error-container": "#FFDAD4",
      "on-error": "#FFFFFF",
      surface: "#FBFDFC",
      "surface-1": "#EEF6F5",
      "surface-2": "#E7F1F1",
      "surface-3": "#DFEDEC",
      "surface-4": "#DDEBEB",
      "surface-5": "#D8E8E8",
      "on-surface": "#191C1C",
      "surface-variant": "#DAE4E4",
      "on-surface-variant": "#3F4848",
      outline: "#6F7979",
      secondary: "#496364",
      "secondary-container": "#CCE8E8",
      "on-secondary": "#FFFFFF",
      "on-secondary-container": "#041F20",
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
    extend: {
      borderWidth: {
        1: "1px",
      },
      opacity: {
        8: "0.08",
        12: "0.12",
        16: "0.16",
      },
    },
  },
};
