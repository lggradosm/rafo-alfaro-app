/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      boxShadow: {
        default: "0 2px 3px -3px   rgba(0,0,0,.8)",
        card: "0 0 3px rgba(0,0,0,.15)",
      },
      keyframes: {
        rightToLeft: {
          "0%": { left: "100%", opacity: "0" },
          "50%": { left: "0px", opacity: "1" },
        },
        leftToRight: {
          "0%": { right: "100%", opacity: "0" },
          "50%": { right: "0px", opacity: "1" },
        },
      },
      animation: {
        rightToLeft: "rightToLeft 1.5s ease-in-out ",
        leftToRight: "leftToRight 1.5s ease-in-out",
      },

      minHeight: {
        defaultPage: "calc(20rem) ",
      },
      padding: {
        headerPage: "6rem",
        mobilePage: "1.5rem",
      },
      fontFamily: {
        widescreen: ["Widescreen Trial", "Roboto"],
      },
    },
  },
  plugins: [],
};
