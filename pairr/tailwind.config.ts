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
        // High-end Palette: Black, White, Purple
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          black: "#000000",
          white: "#FFFFFF",
          purple: {
            light: "#E0BBE4",
            DEFAULT: "#6A0DAD", // Primary Purple
            dark: "#4B0082",
            deep: "#2E0854",
          },
        },
        accent: {
          purple: "#9D50BB",
          gold: "#D4AF37", // Optional for premium feel
        },
        surface: {
          dark: "#121212",
          gray: "#1E1E1E",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "brand-gradient": "linear-gradient(135deg, #6A0DAD 0%, #4B0082 100%)",
      },
      borderRadius: {
        'premium': '1rem',
      },
      boxShadow: {
        'purple-glow': '0 0 15px rgba(106, 13, 173, 0.3)',
      }
    },
  },
  plugins: [],
};
export default config;
