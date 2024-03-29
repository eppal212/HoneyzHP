"use client";

import { memo } from "react";
import { usePathname } from "next/navigation";
import { useScopedI18n } from "@/locales/client";
import { motion } from "framer-motion";

// 서브페이지 상단에 노출되는 타이틀
const PageTitle = () => {
  const pageName = usePathname().split("/")[2];
  const getKey = () => {
    switch (pageName) {
      case "about":
        return "page.about";
      case "talents":
        return "page.talents";
      case "guideline":
        return "page.guideline";
      default:
        return "page";
    }
  };
  const t = useScopedI18n(getKey());

  return (
    <motion.div
      className="flex flex-col items-center pt-36 justify-center -z-10"
      initial={{ opacity: 0, transform: "translateY(-10px)" }}
      whileInView={{
        opacity: 1,
        transform: "translateY(0px)",
        transition: {
          type: "tween",
          duration: 0.9,
          ease: [0.17, 0.55, 0.55, 1],
          delay: 0.3,
        },
      }}
      viewport={{ once: true }}
    >
      <span className="mb-2 text-lg font-starL text-primary">
        {t("subtitle")}
      </span>
      <span className=" text-6xl font-starB drop-shadow-title gradient-text-primary">
        {`[ ${pageName.toUpperCase()} ]`}
      </span>
    </motion.div>
  );
};

export default memo(PageTitle);
