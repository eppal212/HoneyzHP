"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { useCurrentLocale, useChangeLocale } from "@/locales/client";
import { motion, useScroll, useTransform } from "framer-motion";
import { IconWorld } from "@tabler/icons-react";
import MotionButton from "@/components/common/MotionButton";
import Logo from "/public/img/logo.png";

// import localFont from "next/font/local";

// const customFont = localFont({
//   src: "../../../public/fonts/BMJUA.woff",
// });

const TopMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();
  const menus = ["about", "news", "talents", "guideline"];

  const { scrollY } = useScroll();
  const bgOpacity = useTransform(() =>
    scrollY.get() > 78 ? 0.8 : (scrollY.get() / 78) * 0.8
  );

  return (
    <div className="fixed top-1.5 flex justify-between w-full z-20">
      {/* 홈 버튼 */}
      <div
        className="relative flex items-center px-3 h-[78px]"
        onClick={() => router.push("/")}
      >
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 right-0 w-full h-full rounded-r-lg border-y-2 border-r-2 border-primary bg-white"
          style={{ opacity: bgOpacity }}
        />
        <MotionButton
          className="z-30"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image src={Logo} alt="logo" width={64} />
        </MotionButton>
      </div>

      {/* 메뉴 목록 */}
      <div className="relative flex gap-20 pl-24 pr-8">
        <motion.div
          className="absolute top-1/2 right-0 w-full h-3/5 rounded-l-full border-y-2 border-l-2 border-primary bg-white -translate-y-1/2"
          style={{ opacity: bgOpacity }}
        />
        {menus.map((item, index) => (
          <MotionButton
            key={index}
            className={`text-lg font-logo z-30 ${
              pathname.split("/")[2] === item
                ? "gradient-text-primary"
                : "text-black"
            } hover:text-primary`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => router.push(item)}
          >
            {item.toUpperCase()}
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
            <span className="mt-[1px] text-sm font-bold font-nanum">
              {currentLocale === "ko" ? "KR" : "EN"}
            </span>
          </div>
        </MotionButton>
      </div>
    </div>
  );
};

export default TopMenu;
