"use client";

import { memo } from "react";
import Image from "next/image";
import { useScopedI18n } from "@/locales/client";
import {
  IconBrandX,
  IconBrandYoutubeFilled,
  IconBrandTwitch,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import MotionButton from "@/components/common/MotionButton";
import { TalentData } from "@/models/TalentData";
import YouTube from "react-youtube";
import BgLogo from "/public/img/bg-logo.png";

interface props {
  id: string;
  onClose: () => void;
}

const TalentExpand = ({ id, onClose }: props) => {
  const data = TalentData.find((item) => item.id === id);
  const getKey = () => {
    switch (id) {
      case "honey-churros":
        return "page.talents.honey-churros";
      case "ohwayo":
        return "page.talents.ohwayo";
      case "dam-yui":
        return "page.talents.honey-churros";
      case "aya-uke":
        return "page.talents.aya-uke";
      case "mang-nae":
        return "page.talents.mang-nae";
      case "ddddragon":
        return "page.talents.ddddragon";
      default:
        return "page";
    }
  };
  const t = useScopedI18n(getKey());

  return (
    <div
      className="fixed inset-0 w-screen h-screen z-40 flex justify-center items-center bg-black bg-opacity-20"
      onClick={() => onClose()}
    >
      <motion.img
        className="w-[386px] h-[800px]"
        layoutId={id}
        src={`/img/${id}-full.png`}
        alt="expand-full"
      />

      <motion.div
        key={id}
        className="relative flex flex-col w-[800px] h-[800px] bg-bg rounded-3xl p-10"
        initial={{ opacity: 0, transform: "translateX(-10px)" }}
        animate={{
          opacity: 1,
          transform: "translateX(0px)",
          transition: {
            type: "tween",
            duration: 0.6,
            ease: [0.17, 0.55, 0.55, 1],
            delay: 0.3,
          },
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between">
          {/* 이름 */}
          <div className="flex flex-col">
            <h1
              className={`text-7xl font-starB drop-shadow-title gradient-text-primary`}
            >
              {data?.name}
            </h1>
            <h2
              className={`text-4xl font-starB drop-shadow-title gradient-text-primary`}
            >
              {data?.enName}
            </h2>
          </div>
          <div className="flex gap-5">
            <MotionButton onClick={() => window.open(data?.xLink)}>
              <IconBrandX size={40} />
            </MotionButton>
            <MotionButton onClick={() => window.open(data?.youtubeLink)}>
              <IconBrandYoutubeFilled size={40} />
            </MotionButton>
            <MotionButton onClick={() => window.open(data?.twitchLink)}>
              <IconBrandTwitch size={40} />
            </MotionButton>
          </div>
        </div>

        {/* 글씨들 */}
        <p className="text-xl whitespace-pre-wrap font-bold font-nanum text-text mt-8">
          {t("detail")}
        </p>
        <p className="text-xl whitespace-pre-wrap font-bold font-nanum text-text mt-8">
          {t("hello")}
        </p>
        <p className="text-xl whitespace-pre-wrap font-bold font-nanum text-text mt-12">
          {t("introduce")}
        </p>

        {/* 유튜브 */}
        <YouTube
          className="mt-auto self-center"
          videoId={data?.vedioLId}
          opts={{ width: "426px", height: "240px" }}
        />

        {/* 워터마크 */}
        <div className="absolute inset-0 -z-10 pointer-events-none flex justify-center items-center">
          <Image className="opacity-5" src={BgLogo} alt="bg-logo" width={500} />
        </div>
      </motion.div>
    </div>
  );
};

export default memo(TalentExpand);
