"use client";

import Image from "next/image";
import {
  IconBrandX,
  IconBrandYoutubeFilled,
  IconSquareLetterN,
} from "@tabler/icons-react";
import MotionButton from "@/components/common/motionButton";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-5 py-10 mt-40 bg-gradient-to-r from-gradiant1 via-gradiant0 to-gradiant1">
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
      <div className="flex items-center gap-3">
        <text className="text-xl font-bold">Operating by</text>
        <Image
          src="/img/projecti-black.png"
          alt="projecti"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default Footer;
