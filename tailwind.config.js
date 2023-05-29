module.exports = {
  theme: {
    extend: {
      colors: {
        "login-bg": "#000000",
        "screen-bg": "#EBEBEB",
        "sidebar-bg": "#333333",
        "modal-bg": "#ABABAB",
        "no-btn-bg": "#DEDEDE",
        "hover-btn": "#D8D8D8",
        "custom-blue": "#5A7B8D",
        "custom-pink": "#8D5A76",
        "custom-olive": "#7A7A5A",
        "custom-green": "#628761",
      },
      fontFamily: {
        sailec: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"], 
      },
      width: {
        70: "280px",
        62: "248px",
        56: "224px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover"],
    },
  },
  plugins: [],
  content: ["./src/**/*.jsx", "./src/**/*.js"],
  darkMode: "media",
};
