"use client";

import { memo } from "react";
import MotionAppearView from "@/components/layout/MotionAppearView";

interface props {
  index: number;
}

const HomeVideoItem = ({ index }: props) => {
  return (
    <MotionAppearView
      className="w-[23%] h-56 bg-pastel"
      type="left"
      delay={0.6 + (index + 1) * 0.1}
    >
      asdf
    </MotionAppearView>
  );
};

export default memo(HomeVideoItem);
