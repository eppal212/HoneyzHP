"use client";

import { memo, useState } from "react";
import { motion, MotionProps } from "framer-motion";
import { IconBroadcast } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";
import getColors from "@/hooks/getColors";

interface props extends MotionProps {
  className?: string;
}

const GoToLiveButton = ({ className, ...others }: props) => {
  const colors = getColors();
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
        <p className="text-2xl font-nanumGEB tracking-widest text-primary">
          하루가 달콤해지는 마법
        </p>
        <motion.p
          className="absolute top-0 h-full overflow-hidden text-2xl font-nanumGEB tracking-widest gradient-text-primary"
          initial={{ width: "0%" }}
          animate={{
            width: isHover ? "100%" : 0,
            transition: { duration: 0.3 },
          }}
        >
          하루가 달콤해지는 마법
        </motion.p>
      </div>

      <div className="flex items-center relative mt-2">
        <p className="text-6xl font-nanumGEB tracking-widest text-primary">
          생방송 보러가기
        </p>
        <motion.p
          className="absolute top-0 h-full overflow-hidden text-6xl font-nanumGEB tracking-widest gradient-text-primary"
          initial={{ width: "0%" }}
          animate={{
            width: isHover ? "100%" : 0,
            transition: { duration: 0.3 },
          }}
        >
          생방송 보러가기
        </motion.p>

        <motion.div
          initial={{ color: colors.primary }}
          animate={{
            color: isHover ? colors.gradient1 : colors.primary,
            transition: { duration: 0.1, delay: isHover ? 0.3 : 0 },
          }}
        >
          <IconBroadcast size={48} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default memo(GoToLiveButton);
