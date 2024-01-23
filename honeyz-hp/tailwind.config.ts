import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { colors: { primary: "#ff5e88", bg: "#ffeaef" } },
    fontFamily: {
      BMJUA: ["BMJUA"],
      logo: ["LunarModularBold"],
    },
  },
  plugins: [],
};
export default config;
