"use client";

import { memo, useState } from "react";
import { LocaleProvider } from "@/app/[locale]/LocaleProvider";
import { useCurrentLocale } from "@/locales/client";
import { motion } from "framer-motion";
import { TalentData } from "@/models/TalentData";
import TalentExpand from "@/components/talent-card/TalentExpand";
import ParallaxText from "@/components/ParallaxText";
import MotionAppearView from "@/components/layout/MotionAppearView";

const TalentGrid = () => {
  const locale = useCurrentLocale();
  const [selectId, setSelectId] = useState<string>();
  const [hoverId, setHoverId] = useState<string>();
  return (
    <>
      {/* Card를 컴포넌트로 분리하면 layoutId가 동작하지 않아서 List에서 구현 */}
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-20">
        {TalentData.map((data, index) => (
          <MotionAppearView key={data.id} type="up">
            <motion.button
              className={`relative rounded-2xl border-2`}
              style={{
                borderColor: data.personalColor,
                background: `linear-gradient(0deg, ${data.personalColor} 0%, transparent 100%)`,
              }}
              onHoverStart={() => setHoverId(data.id)}
              onHoverEnd={() => setHoverId(undefined)}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectId(data.id)}
            >
              {/* 이미지 */}
              <motion.img
                className={`w-80`}
                layoutId={data.id}
                src={`/img/profile-${data.id}-${
                  hoverId === data.id ? Math.ceil(Math.random() * 2) : 0
                }.png`}
                alt="profile"
              />
              {/* 이름 */}
              {selectId === data.id || (
                <motion.div
                  className="absolute bottom-4 flex flex-col items-center w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.3 } }}
                >
                  <span
                    className={`text-4xl font-starB drop-shadow-talentName`}
                    style={{ color: data.personalColor }}
                  >
                    {data.name}
                  </span>
                  <span
                    className={`text-xl font-starB drop-shadow-talentName`}
                    style={{ color: data.personalColor }}
                  >
                    {data.enName}
                  </span>
                </motion.div>
              )}

              {/* 이동하는 배경 글자 */}
              <div className="absolute top-0 flex flex-col justify-center gap-4 w-full h-full -z-10">
                {[3, -3, 3, -3, 3].map((item, index) => (
                  <ParallaxText
                    key={index}
                    span={
                      <span
                        className={`break-all text-5xl text-center font-starB`}
                        style={{ color: data.personalColor }}
                      >
                        {data.enName.toUpperCase() + " "}
                      </span>
                    }
                    baseVelocity={item}
                  />
                ))}
              </div>
            </motion.button>
          </MotionAppearView>
        ))}
      </div>

      {selectId && (
        <LocaleProvider locale={locale}>
          <TalentExpand id={selectId} onClose={() => setSelectId(undefined)} />
        </LocaleProvider>
      )}
    </>
  );
};

export default memo(TalentGrid);
