import defaultTheme from "tailwindcss/defaultTheme";

export default {
  theme: {
    fontFamily: {
      sans: ["Helvetica Neue", "sans-serif"],
    },
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        primary: "#5F19F2",
        disable: "#171717",
        emphasis: {
          100: "#7A7A7A",
          200: "#B8B8B8",
          900: "#FFFFFF",
        },
        active: "#0EA5E9",
        negative: "#F43F5E",
        positive: "#14B8A6",
        warning: "#FDBA74",
        neutral: "#0F172A",
        accent: {
          100: "#DFD1FE",
          200: "#BFA3FB",
          300: "#9F75F8",
          400: "#7F47F5",
        },
        surface: {
          100: "#E3DFEB",
          200: "#ECE9F2",
          300: "#E3DFEB",
          400: "#D9D3E5",
          500: "#CCC5D9",
        },
      },
      transitionProperty: {
        "max-height": "max-height",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
