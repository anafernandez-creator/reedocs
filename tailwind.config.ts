import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem"
    },
    extend: {
      colors: {
        background: "#FFFEFD",
        foreground: "#000029",
        card: "#FFFFFF",
        border: "#E6E8EC",
        muted: "#F5F6F8",
        reedocs: {
          orange: "#f25c05",
          blue: "#051a85",
          gray: "#4b4b4d",
          white: "#FFFEFD",
          black: "#000029",
          success: "#16a34a",
          warning: "#f97316",
          critical: "#dc2626"
        }
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem"
      }
    }
  },
  plugins: []
};

export default config;
