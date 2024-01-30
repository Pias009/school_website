module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fffbf9",
          700: "#646467",
          800: "#4c4c4c",
          900: "#262626",
          "900_02": "#1e1e1e",
          "900_01": "#191919",
          "700_01": "#585859",
        },
        deep_orange: {
          50: "#ffeee5",
          200: "#ffbe99",
          300: "#ff9d66",
          A100: "#ffad7f",
          "300_01": "#ff8c4c",
        },
        red: { 50: "#fff5ef", 100: "#ffdecc" },
        black: { 900: "#000000" },
        blue_gray: { 900: "#333333" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { outfit: "Outfit", raleway: "Raleway" },
      boxShadow: {
        bs: "8px 8px  1px 1px #ffbe99",
        bs2: "4px 4px  1px 2px #1e1e1e",
        bs1: "6px 6px  1px 2px #1e1e1e",
        bs3: "8px 8px  1px 1px #1e1e1e",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
