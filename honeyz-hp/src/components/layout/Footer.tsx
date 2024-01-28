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
  const buttonSize = 44;
  const t = useScopedI18n("component.footer");

  return (
    <footer className="relative flex flex-col items-center justify-center w-full h-48 mt-32 gap-5 bg-gradient-to-r from-gradient1 via-gradient0 to-gradient1">
      {/* 맨 위로 버튼 */}
      <MotionButton
        className="absolute -top-[22px] right-20 rounded-full bg-bg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <IconCircleArrowUp className="text-gradient1" size={buttonSize} />
      </MotionButton>

      {/* 링크 아이템 */}
      <div className="relative flex items-center gap-10">
        <MotionButton
          onClick={() => window.open("https://twitter.com/projecti_kr")}
        >
          <IconBrandX size={buttonSize} />
        </MotionButton>
        <span>|</span>
        <MotionButton
          onClick={() => window.open("https://www.youtube.com/@Projecti_kr")}
        >
          <IconBrandYoutubeFilled size={buttonSize} />
        </MotionButton>
        <span>|</span>
        <MotionButton
          onClick={() => window.open("https://cafe.naver.com/projectiofficial")}
        >
          <IconSquareLetterN size={buttonSize} />
        </MotionButton>
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
        >
          <IconMail size={buttonSize} />
        </MotionButton>
      </div>

      {/* 회사 로고 */}
      <div className="flex items-center gap-3">
        <span className="text-lg font-bold">Operating by</span>
        <Image src={Projecti} alt="projecti" width={buttonSize} />
      </div>
    </footer>
  );
};

export default Footer;
