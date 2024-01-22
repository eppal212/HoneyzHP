"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import localFont from "next/font/local";

const customFont = localFont({
  src: "../../../public/fonts/BMJUA_TTF.woff",
});

const TopMenu = () => {
  const router = useRouter();

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
        <button
          className={`text-2xl ${customFont.className}`}
          onClick={() => router.push("about")}
        >
          ABOUT
        </button>
        <button
          className={`text-2xl ${customFont.className}`}
          onClick={() => router.push("news")}
        >
          NEWS
        </button>
        <button onClick={() => router.push("talents")}>TALENTS</button>
        <button onClick={() => router.push("guideline")}>GUIDELINE</button>
      </div>
    </div>
  );
};
export default TopMenu;
