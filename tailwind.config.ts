import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#242824",
        paper: "#F8F6F0",
        paper2: "#EFEADF",
        forest: {
          950: "#10241E",
          900: "#173F35",
          800: "#1E4A3E",
          700: "#245447",
          600: "#2F6354",
        },
        gold: {
          700: "#83692F",
          600: "#A98A52",
          500: "#C5A66A",
          300: "#DEC694",
          100: "#F0E6CE",
        },
        earth: {
          700: "#6E5239",
          500: "#8B684B",
          100: "#EFE6DB",
        },
        sage: "#DCE5DB",
        muted: "#666C63",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
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
