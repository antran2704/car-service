import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-50": "#E6EEFC",
        "primary-100": "#1A82E3",
        "primary-200": "#0459DD",
        accent: "#F44E77",
        "neutral-50": "#F2F6FF",
        "neutral-100": "#6A6D9E",
        stroke: "#CAD6F1",
      },
    },
    container: {
      center: true,
      padding: "20px",
      screens: {
        "2xl": "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
