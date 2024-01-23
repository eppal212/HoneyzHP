import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5e88",
        text: "#2e050c",
        bg: "#ffeaef",
        gradiant0: "#fb78ae",
        gradiant1: "#ff807e",
        gradiant2: "#feb580",
        projecti: "#00c7fe",
      },
      dropShadow: {
        title: "5px 5px #ff5e8833",
      },
    },
    fontFamily: {
      logo: ["LunarModularBold"],
      starB: ["PyeongChangPeaceBold"],
      starL: ["PyeongChangPeaceLight"],
      nanum: ["NanumSquareRoundR"],
    },
  },
  plugins: [],
};
export default config;
