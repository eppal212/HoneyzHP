import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig, {
  type Colors,
  type DefaultColors,
} from "@/../tailwind.config";

const getColors = () => {
  const tw = resolveConfig(tailwindConfig);
  const { theme } = tw as unknown as {
    theme: (typeof tw)["theme"] & { colors: DefaultColors & Colors };
  };
  return theme.colors;
};

export default getColors;
