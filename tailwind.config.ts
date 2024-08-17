import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          dark: "#233831",
          light: "#234138",
          DEFAULT: "#233831",
        },
        customGreen: "#8FDCC2",
        goldenYellow: "#FFDF00",
      },
      boxShadow: {
        custom: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      backdropBlur: {
        "3.4": "3.4px",
      },
      width: {
        "90p": "90%",
        "85p": "85%",
        "80p": "80%",
        "75p": "75%",
        "60p": "60%",
        "2/3": "66.66%",
        "1/3": "33.33%",
      },
      keyframes: {
        scrollDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        scrollDown: 'scrollDown 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
export default config;