"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import MotionButton from "@/components/common/MotionButton";

// import localFont from "next/font/local";

// const customFont = localFont({
//   src: "../../../public/fonts/BMJUA.woff",
// });

const TopMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const x = useTransform(() =>
    scrollY.get() > 78 ? 0.8 : (scrollY.get() / 78) * 0.8
  );

  const menus = ["about", "news", "tealents", "guideline"];

  return (
    <div className="fixed top-1.5 flex justify-between w-full">
      {/* 홈 버튼 */}
      <div
        className="relative flex items-center px-3 h-[78px]"
        onClick={() => router.push("/")}
      >
        <motion.div
          className="absolute top-1/2 translate-y-[-50%] right-0 w-full h-full rounded-r-lg border-y-2 border-r-2 border-primary bg-white z-20"
          style={{ opacity: x }}
        />
        <MotionButton
          className="z-30"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image src="/img/logo.png" alt="logo" width={64} height={64} />
        </MotionButton>
      </div>

      {/* 메뉴 목록 */}
      <div className="relative flex px-24 gap-28">
        <motion.div
          className="absolute top-1/2 right-0 w-full h-3/5 rounded-l-full border-y-2 border-l-2 border-primary bg-white z-20 translate-y-[-50%]"
          style={{ opacity: x }}
        />
        {menus.map((item, index) => (
          <MotionButton
            key={index}
            className={`text-lg font-logo z-30 ${
              pathname.split("/")[1] === item
                ? "text-transparent bg-clip-text bg-gradient-to-r from-gradient0 to-gradient1"
                : "text-black"
            } hover:text-primary`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => router.push(item)}
            children={item.toUpperCase()}
          />
        ))}
      </div>
    </div>
  );
};

export default TopMenu;
