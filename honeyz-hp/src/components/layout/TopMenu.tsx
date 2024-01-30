"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { useCurrentLocale, useChangeLocale } from "@/locales/client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { IconWorld } from "@tabler/icons-react";
import MotionButton from "@/components/common/MotionButton";
import Logo from "/public/img/logo.png";
import MenuData from "@/models/MenuData";
import { useState } from "react";

const TopMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  const { scrollY } = useScroll();
  // const bgOpacity = useTransform(() =>
  //   scrollY.get() > 78 ? 0.8 : (scrollY.get() / 78) * 0.8
  // );
  const [isScrollDown, setScrollDown] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollDown(scrollY.getPrevious() < latest);
  });

  return (
    <motion.header
      className="fixed top-0 flex justify-between w-full z-20 h-20"
      initial={{ transform: "translateY(0px)" }}
      animate={{
        transform: isScrollDown ? "translateY(-100%)" : "translateY(0px)",
        transition: { duration: 0.3 },
      }}
    >
      {/* <motion.div
        className="absolute top-0 w-full h-full bg-gradient-to-b from-bg"
        style={{ opacity: bgOpacity }}
      /> */}
      {/* 홈 버튼 */}
      <div
        className="relative flex items-center px-3 drop-shadow-top-menu"
        onClick={() => router.push("/")}
      >
        <MotionButton
          className="z-30"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image src={Logo} alt="logo" width={64} />
        </MotionButton>
      </div>

      {/* 메뉴 목록 */}
      <nav className="relative flex gap-20 pl-24 pr-8 drop-shadow-top-menu">
        {MenuData.map((item, index) => (
          <MotionButton
            key={index}
            className={`text-lg font-logo z-30 ${
              pathname.split("/")[2] === item.path
                ? "gradient-text-primary"
                : "text-text"
            } hover:text-primary`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              item.url ? window.open(item.url) : router.push(item.path)
            }
          >
            {item.name}
          </MotionButton>
        ))}
        <MotionButton
          className={`text-lg font-logo z-30 hover:text-primary -ml-6`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeLocale(currentLocale === "ko" ? "en" : "ko")}
        >
          <div className="flex items-center">
            <IconWorld />
            <span className="mt-[1px] text-sm font-bold font-nanumR">
              {currentLocale === "ko" ? "KR" : "EN"}
            </span>
          </div>
        </MotionButton>
      </nav>
    </motion.header>
  );
};

export default TopMenu;
