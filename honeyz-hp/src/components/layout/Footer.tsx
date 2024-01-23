"use client";

import Image from "next/image";
import {
  IconCircleArrowUp,
  IconBrandX,
  IconBrandYoutubeFilled,
  IconSquareLetterN,
} from "@tabler/icons-react";
import MotionButton from "@/components/common/MotionButton";
import Projecti from "/public/img/projecti-black.png";

const Footer = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full gap-5 py-10 mt-40 bg-gradient-to-r from-gradient1 via-gradient0 to-gradient1">
      {/* 맨 위로 버튼 */}
      <MotionButton
        className="absolute top-[-30px] right-20 rounded-full bg-bg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        children={<IconCircleArrowUp className="text-gradient1" size={60} />}
      />

      {/* 링크 아이템 */}
      <div className="flex items-center gap-10">
        <MotionButton
          onClick={() => window.open("https://twitter.com/projecti_kr")}
          children={<IconBrandX size={50} />}
        />
        <text>|</text>
        <MotionButton
          onClick={() => window.open("https://www.youtube.com/@Projecti_kr")}
          children={<IconBrandYoutubeFilled size={50} />}
        />
        <text>|</text>
        <MotionButton
          onClick={() => window.open("https://cafe.naver.com/projectiofficial")}
          children={<IconSquareLetterN size={50} />}
        />
      </div>

      {/* 회사 로고 */}
      <div className="flex items-center gap-3">
        <text className="text-xl font-bold">Operating by</text>
        <Image src={Projecti} alt="projecti" width={50} />
      </div>
    </div>
  );
};

export default Footer;
