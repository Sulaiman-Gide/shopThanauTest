import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nats: ["NATS", "sans-serif"],
        proxima: ["ProximaNova", "sans-serif"],
        proximaLight: ["ProximaNovaLight", "sans-serif"],
        proximaThin: ["ProximaNovaThin", "sans-serif"],
        ProximaNovaRegular: ["ProximaNovaRegular", "sans-serif"],
        ProximaNovaBold: ["ProximaNovaBold", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
