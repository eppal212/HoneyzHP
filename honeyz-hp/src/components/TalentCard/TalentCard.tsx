"use client";

import { memo, useState } from "react";
import { motion } from "framer-motion";
import ParallaxText from "../ParallaxText";
import MotionAppearView from "../layout/MotionAppearView";

export type Talent = {
  id: string;
  name: string;
  enName: string;
  profileImages: string[];
  personalColor: string;
};

interface props {
  data: Talent;
  setSelectId: (id: string) => void;
}

const TalentCard = ({ data, setSelectId }: props) => {
  const [isHover, setHover] = useState(false);

  return (
    <MotionAppearView type="up" layoutId={data.id}>
      <motion.button
        className="relative"
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        whileHover={{ scale: 1.1 }}
        onClick={() => setSelectId(data.id)}
      >
        {/* 이미지 */}
        <motion.img
          className={`w-80 rounded-2xl border-2`}
          style={{ borderColor: data.personalColor }}
          src={`/img/${
            data.profileImages[isHover ? Math.ceil(Math.random() * 2) : 0]
          }.png`}
          alt="profile"
        />
        {/* 이름 */}
        <div className="absolute bottom-4 flex flex-col items-center w-full">
          <span
            className={`text-4xl font-starB drop-shadow-talentName`}
            style={{ color: data.personalColor }}
          >
            {data.name}
          </span>
          <span
            className={`text-xl font-starB drop-shadow-talentName`}
            style={{ color: data.personalColor }}
          >
            {data.enName}
          </span>
        </div>
        {/* 이동하는 배경 글자 */}
        <div className="absolute top-0 flex flex-col justify-center gap-4 w-full h-full z-[-1]">
          {[3, -3, 3, -3, 3].map((item, index) => (
            <ParallaxText
              key={index}
              span={
                <span
                  className={`break-all text-5xl text-center font-starB`}
                  style={{ color: data.personalColor }}
                >
                  {data.enName.toUpperCase() + " "}
                </span>
              }
              baseVelocity={item}
            />
          ))}
        </div>
      </motion.button>
    </MotionAppearView>
  );
};

export default memo(TalentCard);
