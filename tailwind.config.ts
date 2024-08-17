// tailwind.config.js
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "brand-gradient": "var(--brand-gradient)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "gradient-waving": {
          "0%": { backgroundPosition: "0% 0%" },
          "25%": { backgroundPosition: "50% 25%" },
          "50%": { backgroundPosition: "75% 75%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
      },
      animation: {
        "gradient-waving": "gradient-waving 4s linear infinite",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(to right, #4F46E5, #3B82F6, #10B981)",
      },
      backdropBlur: {
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
      backgroundOpacity: {
        50: "0.5",
        70: "0.7",
        90: "0.9",
      },
      transitionProperty: {
        all: "all",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
