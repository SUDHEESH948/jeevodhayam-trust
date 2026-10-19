import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F7F3",
        forest: "#183D32",
        sage: "#A9BBAA",
        beige: "#EAE6DD",
        charcoal: "#242824",
      },
    },
  },
  plugins: [],
};

export default config;
