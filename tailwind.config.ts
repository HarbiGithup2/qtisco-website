import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        // QTISCO Brand Colors
        qtiscoRed: {
          DEFAULT: "hsl(350 78% 47%)", // #DC2626
          50: "hsl(350 78% 95%)",
          100: "hsl(350 78% 90%)",
          200: "hsl(350 78% 80%)",
          300: "hsl(350 78% 70%)",
          400: "hsl(350 78% 60%)",
          500: "hsl(350 78% 47%)",
          600: "hsl(350 78% 40%)",
          700: "hsl(350 78% 30%)",
          800: "hsl(350 78% 20%)",
          900: "hsl(350 78% 10%)",
        },
        qtiscoBlue: {
          DEFAULT: "hsl(217 76% 54%)", // #2563EB
          50: "hsl(217 76% 95%)",
          100: "hsl(217 76% 90%)",
          200: "hsl(217 76% 80%)",
          300: "hsl(217 76% 70%)",
          400: "hsl(217 76% 60%)",
          500: "hsl(217 76% 54%)",
          600: "hsl(217 76% 40%)",
          700: "hsl(217 76% 30%)",
          800: "hsl(217 76% 20%)",
          900: "hsl(217 76% 10%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
