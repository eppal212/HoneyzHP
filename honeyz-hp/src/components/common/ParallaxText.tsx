"use client";

import {
  motion,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { memo } from "react";
import { twMerge } from "tailwind-merge";

interface props {
  className?: string;
  span: React.ReactNode;
  baseVelocity?: number;
}

// TODO: 개선
// https://codesandbox.io/p/sandbox/framer-motion-scroll-velocity-r1dy4u?file=%2Fsrc%2Fstyles.css%3A149%2C1
const ParallaxText = ({ className, span, baseVelocity = 5 }: props) => {
  const baseValue = useMotionValue(0);

  const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };

  const transform = useTransform(baseValue, (v) => `${wrap(-20, -45, v)}%`);

  useAnimationFrame((_, delta) => {
    let moveBy = baseVelocity * (delta / 1000);
    baseValue.set(baseValue.get() + moveBy);
  });

  return (
    <div className={twMerge("flex flex-nowrap overflow-hidden m-0", className)}>
      <motion.div
        className="flex flex-nowrap whitespace-pre"
        style={{ x: transform }}
      >
        {[...Array(4)].map(() => span)}
      </motion.div>
    </div>
  );
};

export default memo(ParallaxText);
