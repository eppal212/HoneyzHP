"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

// import localFont from "next/font/local";

// const customFont = localFont({
//   src: "../../../public/fonts/BMJUA.woff",
// });

const TopMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const menus = ["about", "news", "tealents", "guideline"];

  return (
    <div className="absolute top-0 flex justify-between mt-1.5 w-full">
      {/* 홈 버튼 */}
      <button
        className="py-2 px-3 rounded-r-lg border-double border-y-2 border-r-2 border-pink-500"
        onClick={() => router.push("/")}
      >
        <Image src="/img/logo.png" alt="logo" width={64} height={64} />
      </button>

      {/* 메뉴 목록 */}
      <div className="flex item-center gap-32 mr-32">
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
