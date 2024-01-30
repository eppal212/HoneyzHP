import type { Config } from "tailwindcss";
import defaultColors from "tailwindcss/colors";

const colors = {
  primary: "#ff5e88",
  text: "#501E2B",
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

      dropShadow: ({ theme }) => ({
        title: "5px 5px theme(colors.primary)33",
        "talent-name": [
          "-1px 0 2px white",
          "0 1px 2px white",
          "1px 0 2px white",
          "0 -1px 2px white",
        ],
        "top-menu": [
          "-1px 0 2px theme(colors.bg)bf",
          "0 1px 2px theme(colors.bg)bf",
          "1px 0 2px theme(colors.bg)bf",
          "0 -1px 2px theme(colors.bg)bf",
        ],
      }),
      backgroundImage: {
        "home-talents": "url('/img/home-talents.png')",
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
