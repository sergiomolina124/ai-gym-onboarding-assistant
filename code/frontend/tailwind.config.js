/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0D0D0D",
          surface: "#1A1A1A",
          card: "#242424",
          accent: "#E8FF47",
          text: "#F5F5F5",
          muted: "#888888",
          border: "#2E2E2E",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 80%, 100%": { opacity: "0" },
          "40%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.2s ease-out forwards",
        blink: "blink 1.2s infinite",
      },
    },
  },
  plugins: [],
};
