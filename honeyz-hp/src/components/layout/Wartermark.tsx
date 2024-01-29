"use client";

import { memo } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import BgLogo from "/public/img/bg-logo.png";

const Wartermark = () => {
  const isHome = usePathname().split("/").length < 3;

  return (
    isHome || (
      <div className="sticky bottom-0 -z-10 ">
        <Image
          className="absolute bottom-10 right-10 opacity-5 pointer-events-none"
          src={BgLogo}
          alt="bg-logo"
          width={500}
        />
      </div>
    )
  );
};

export default memo(Wartermark);
