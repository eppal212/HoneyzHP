"use client";

import Image from "next/image";
import {
  IconCircleArrowUp,
  IconBrandX,
  IconBrandYoutubeFilled,
  IconSquareLetterN,
  IconMail,
} from "@tabler/icons-react";
import { useScopedI18n } from "@/locales/client";
import MotionButton from "@/components/common/MotionButton";
import Projecti from "/public/img/projecti-black.png";

const Footer = () => {
  const buttonSize = 45;
  const t = useScopedI18n("component.footer");

  return (
    <div className="relative flex flex-col items-center justify-center w-full gap-5 py-10 mt-32 bg-gradient-to-r from-gradient1 via-gradient0 to-gradient1">
      {/* 맨 위로 버튼 */}
      <MotionButton
        className="absolute top-[-25px] right-20 rounded-full bg-bg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        children={
          <IconCircleArrowUp className="text-gradient1" size={buttonSize} />
        }
      />

      {/* 링크 아이템 */}
      <div className="relative flex items-center gap-10">
        <MotionButton
          onClick={() => window.open("https://twitter.com/projecti_kr")}
          children={<IconBrandX size={buttonSize} />}
        />
        <span>|</span>
        <MotionButton
          onClick={() => window.open("https://www.youtube.com/@Projecti_kr")}
          children={<IconBrandYoutubeFilled size={buttonSize} />}
        />
        <span>|</span>
        <MotionButton
          onClick={() => window.open("https://cafe.naver.com/projectiofficial")}
          children={<IconSquareLetterN size={buttonSize} />}
        />
        <span>|</span>
        <MotionButton
          onClick={() => {
            try {
              navigator.clipboard.writeText("contact@projecti.kr");
              alert(t("email-ok"));
            } catch {
              alert(t("email-fail"));
            }
          }}
          children={<IconMail size={buttonSize} />}
        />
      </div>

      {/* 회사 로고 */}
      <div className="flex items-center gap-3">
        <span className="text-lg font-bold">Operating by</span>
        <Image src={Projecti} alt="projecti" width={buttonSize} />
      </div>
    </div>
  );
};

export default Footer;
