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
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_4c": "#0000004c",
          "900_3f": "#0000003f",
          "900_99": "#00000099",
        },
        amber: { 800: "#ff8c00" },
        light_blue: {
          900: "#00529b",
          "900_33": "#00529b33",
          "900_19": "#00529b19",
        },
        deep_orange: { A100: "#ffa07a" },
        red: { 700: "#dc143c" },
        blue: { 200: "#87ceeb", "50_cc": "#e3f1ffcc" },
        indigo: { A100: "#818eff" },
        gray: { 100: "#f4f6f8" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
