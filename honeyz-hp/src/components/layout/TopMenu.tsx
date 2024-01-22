"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

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
      <button
        className="flex items-center px-3 h-[78px]"
        onClick={() => router.push("/")}
      >
        <motion.div
          className="absolute top-1/2 right-0 w-full h-full rounded-r-lg border-y-2 border-r-2 border-pink-500 bg-white z-[-1] translate-y-[-50%]"
          style={{ opacity: x }}
        />
        <Image src="/img/logo.png" alt="logo" width={64} height={64} />
      </button>

      {/* 메뉴 목록 */}
      <div className="relative flex gap-32 px-32">
        <motion.div
          className="absolute top-1/2 right-0 w-full h-4/5 rounded-l-full border-y-2 border-l-2 border-pink-500 bg-white z-[-1] translate-y-[-50%]"
          style={{ opacity: x }}
        />
        {menus.map((item, index) => (
          <button
            key={index}
            className={`text-2xl ${
              pathname.split("/")[1] === item
                ? "text-pink-500"
                : "text-black-500"
            } hover:text-pink-500`}
            style={{ fontFamily: "BMJUA" }}
            onClick={() => router.push(item)}
            children={item.toUpperCase()}
          />
        ))}
      </div>
    </div>
  );
};

export default TopMenu;
