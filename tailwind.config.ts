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
        forest: {
          DEFAULT: "#1A3C34", // Deep Forest Green
          light: "#2C5E52",
          dark: "#0F2621",
        },
        sienna: {
          DEFAULT: "#E07A5F", // Burnt Sienna
          light: "#E89F8C",
          dark: "#C0563A",
        },
        cream: {
          DEFAULT: "#F4F1DE", // Off-White
          light: "#FDFCF8", // Lighter cream for backgrounds
          dark: "#E6E2C8",
        },
        charcoal: {
          DEFAULT: "#3D405B", // Charcoal Grey
          light: "#54587A",
          dark: "#262839",
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'noise': "url('/noise.png')", // We will simulate this with CSS or a data URL if needed, or just use a color for now
      },
    },
  },
  plugins: [],
};
export default config;
