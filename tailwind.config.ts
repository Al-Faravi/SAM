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
        paper: "#F6F1E5",
        paper2: "#EFE7D5",
        card: "#FFFCF4",
        ink: "#1B2A21",
        inksoft: "#54635A",
        green: "#1F4D38",
        greendeep: "#122B20",
        red: "#C03D2B",
        maroon: "#4A130D",
        coral: "#E8755C",
        gold: "#C99A3C",
      },
      fontFamily: {
        body: ['var(--font-hind)', 'sans-serif'],
        heading: ['var(--font-noto)', 'serif'],
        display: ['var(--font-fraunces)', 'serif'],
      },
      borderRadius: {
        sm: "12px",
        md: "18px",
        lg: "24px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 18px 44px -22px rgba(18,43,32,.35)",
      },
    },
  },
  plugins: [],
};
export default config;