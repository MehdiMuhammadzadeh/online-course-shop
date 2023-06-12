/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazir_thin: "vazir_thin",
        vazir_exLight: "vazir_exlight",
        vazir_light: "vazir_light",
        vazirmatn: "vazirmatn",
        vazir_medium: "vazir_medium",
        vazir_semiB: "vazir_semiB",
        vazir_bold: "vazir_bold",
        vazir_exbold: "vazir_exbold",
        shabnam: "shabnam",
        shabnam_bold: "shabnam_bold",
      },
    },
    colors: {
      white: "#ffffff",
      red: "red",
      blue: "blue",
      green: "green",
      lightgray: "#e2e8f0",
      gray: '#565656',
      deep_pink: "#C200BC",
      dim_gray:'#707070',
      light_gray: "#F6F6F6",
      navLinks_purple: "#5A0BA9",
      darkviolet:"#9326B4",
      light_thin_purple: "#EEE6F6",
    },
  },
  plugins: [],
};
