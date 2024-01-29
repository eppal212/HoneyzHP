import type { Config } from "tailwindcss";
import defaultColors from "tailwindcss/colors";

const colors = {
  primary: "#ff5e88",
  text: "#2e050c",
  bg: "#ffeaef",
  gradient0: "#fb78ae",
  gradient1: "#ff807e",
  gradient2: "#feb580",
  projecti: "#00c7fe",
} as const;

export type Colors = typeof colors;
export type DefaultColors = typeof defaultColors;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      dropShadow: {
        title: "5px 5px #ff5e8833",
        talentName: [
          "-1px 0 2px white",
          "0 1px 2px white",
          "1px 0 2px white",
          "0 -1px 2px white",
        ],
      },
    },
    fontFamily: {
      logo: ["LunarModularBold"],
      starB: ["PyeongChangPeaceBold"],
      starL: ["PyeongChangPeaceLight"],
      nanumG: ["NanumGothic"],
      nanumGEB: ["NanumGothicEB"],
      nanum: ["NanumSquareR"],
      nanumR: ["NanumSquareRound"],
    },
  },
  plugins: [],
};
export default config;
