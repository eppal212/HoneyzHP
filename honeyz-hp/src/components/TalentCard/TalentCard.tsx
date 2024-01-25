"use client";

import Image from "next/image";
import { memo } from "react";
import { motion } from "framer-motion";
import ParallaxText from "../ParallaxText";

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
  const images = data.profileImages.map((item) =>
    require(`/public/img/${item}.png`)
  );

  return (
    <motion.div
      className="relative"
      layoutId={data.id}
      onClick={() => setSelectId(data.id)}
    >
      {/* 이미지 */}
      <Image
        className={`w-80 rounded-2xl border-2`}
        style={{ borderColor: data.personalColor }}
        src={images[0]}
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
    </motion.div>
  );
};

export default memo(TalentCard);
