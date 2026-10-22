import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E10600",
          dark: "#B30500",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        cairo: ["var(--font-cairo)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
