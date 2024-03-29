/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundColor: {
        primaryColor: "#000",
      },
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
        loadOpacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        rightToLeft: "rightToLeft 1.5s ease-in-out ",
        leftToRight: "leftToRight 1.5s ease-in-out",
        underlineNavItem: "fullWidth 150ms ease-in-out forwards",
        loadOpacity: "loadOpacity 200ms cubic-bezier(.42,-0.01,.47,1) forwards",
      },

      inset: {
        header: "var(--navbar--height)",
      },
      height: {
        header: "var(--navbar--height)",
      },
      margin: {
        headerPage: "var(--navbar--height)",
        mobilePage: "1.5rem",
      },
      fontFamily: {
        widescreen: ["Widescreen Trial", "Roboto"],
        manrope: ["Manrope", "Roboto"],
      },
    },
    keyframes: {
      appearWithScale: {
        "0%": { transform: "scale(0.2)", opacity: 0 },
        "50% , 100%": { transform: "scale(1)", opacity: 100 },
      },
      appearWithOpacity: {
        "0%": { opacity: 0 },
        "50% , 100%": { opacity: 100 },
      },
      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
      fullWidth: {
        "0%": { width: "0px" },
        "100%": { width: "100%" },
      },
    },
  },
  plugins: [],
};
