"use client";

import { memo, useState } from "react";
import { motion, MotionProps } from "framer-motion";
import { IconAccessPoint } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";
import getColors from "@/hooks/getColors";
import { useScopedI18n } from "@/locales/client";

interface props extends MotionProps {
  className?: string;
}

const GoToLiveButton = ({ className, ...others }: props) => {
  const colors = getColors();
  const t = useScopedI18n("page.home");
  const [isHover, setHover] = useState(false);

  return (
    <motion.div
      className={twMerge(className, "flex flex-col cursor-pointer")}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      onClick={() =>
        window.open(
          "https://www.twitch.tv/directory/all/tags/%ED%97%88%EB%8B%88%EC%A6%88"
        )
      }
      {...others}
    >
      <div className="relative">
        <span className="text-2xl font-starL font-bold tracking-widest text-primary">
          {t("catchphrase")}
        </span>
        <motion.span
          className="absolute top-0 left-0 h-full overflow-hidden text-2xl font-starL font-bold tracking-widest gradient-text-primary"
          initial={{ width: "0%" }}
          animate={{
            width: isHover ? "100%" : 0,
            transition: { duration: 0.3 },
          }}
        >
          {t("catchphrase")}
        </motion.span>
      </div>

      <div className="flex items-center relative mt-2">
        <span className="text-6xl font-starB tracking-widest text-primary">
          {t("go-to-live")}
        </span>
        <motion.span
          className="absolute top-0 left-0 h-full overflow-hidden text-6xl font-starB tracking-widest gradient-text-primary"
          initial={{ width: "0%" }}
          animate={{
            width: isHover ? "100%" : 0,
            transition: { duration: 0.3 },
          }}
        >
          {t("go-to-live")}
        </motion.span>

        <motion.div
          initial={{ color: colors.primary }}
          animate={{
            color: isHover ? colors.gradient1 : colors.primary,
            transition: { duration: 0.1, delay: isHover ? 0.25 : 0 },
          }}
        >
          <IconAccessPoint size={52} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default memo(GoToLiveButton);
