import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#181818",
        "dark-green": "#2E332F",
        mint: "#BEFFCF",
        "mint-grey": "#F2F7F4",
        grey: {
          1: "#6B6F6C",
          2: "#9AA09C",
          3: "#E4E7E5",
        },
      },
      fontFamily: {
        display: ["Satoshi", "Inter", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      borderRadius: {
        aspire: "8px",
        "aspire-lg": "16px",
      },
      backgroundImage: {
        "aspire-echo":
          "linear-gradient(135deg, #FFFFFF 0%, #F2F7F4 40%, #BEFFCF 100%)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
