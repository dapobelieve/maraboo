import defaultTheme from "tailwindcss/defaultTheme";
export default {
  theme: {
    backgroundImage: {
      "hero-pattern": "url(/assets/images/pattern.svg)",
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      heading: ["Josefin Sans"],
    },
    extend: {
      colors: {
        purple: "#5F19F2",
      },
    },
  },
};
