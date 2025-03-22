/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(0 0% 20%)",
        input: "hsl(0 0% 20%)",
        ring: "hsl(0 0% 30%)",
        background: "hsl(0 0% 10%)",
        foreground: "hsl(0 0% 95%)",
        primary: {
          DEFAULT: "hsl(326, 93%, 54%)",
          foreground: "hsl(0 0% 100%)",
        },
        secondary: {
          DEFAULT: "hsl(217, 50%, 43%)",
          foreground: "hsl(0 0% 100%)",
        },
        destructive: {
          DEFAULT: "hsl(0 100% 50%)",
          foreground: "hsl(0 0% 100%)",
        },
        muted: {
          DEFAULT: "hsl(0 0% 15%)",
          foreground: "hsl(0 0% 60%)",
        },
        accent: {
          DEFAULT: "hsl(0 0% 20%)",
          foreground: "hsl(0 0% 95%)",
        },
        popover: {
          DEFAULT: "hsl(0 0% 12%)",
          foreground: "hsl(0 0% 95%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 12%)",
          foreground: "hsl(0 0% 95%)",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
    },
  },
  plugins: [],
};