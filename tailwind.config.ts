import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16201B",
        paper: "#F8F3E8",
        paper2: "#EFE5D2",
        forest: {
          950: "#061A14",
          900: "#0A2A20",
          800: "#10382A",
          700: "#16513B",
          600: "#1D6950",
        },
        gold: {
          700: "#8A6220",
          600: "#A8792A",
          500: "#C29236",
          300: "#E5CFA0",
          100: "#F3E7CB",
        },
        muted: "#5B6A60",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wrap: "1180px",
        prose: "68ch",
      },
      borderRadius: {
        card: "1.75rem",
      },
      letterSpacing: {
        label: "0.18em",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(22,32,27,0.06), 0 18px 40px -24px rgba(10,42,32,0.35)",
        soft: "0 30px 70px -40px rgba(10,42,32,0.45)",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
