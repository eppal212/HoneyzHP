"use client";

import { memo, useEffect, useState } from "react";
import { IconBoxMultiple } from "@tabler/icons-react";
import { useScopedI18n } from "@/locales/client";
import MotionAppearView from "@/components/layout/MotionAppearView";
import HomeVideoItem from "@/components/pages/home/HomeVideoItem";
import MotionButton from "@/components/common/MotionButton";
import getColors from "@/hooks/getColors";
import useHomeVideos, { HomeVideo } from "@/hooks/useHomeVideos";

interface props {}

const HomeVideoSection = ({}: props) => {
  const colors = getColors();
  const t = useScopedI18n("page.home");
  const [videos, setVideos] = useState<HomeVideo[]>([]);

  useEffect(() => {
    const videoArray = useHomeVideos();
    setVideos(videoArray);
  }, []);

  return (
    <section className="flex justify-center w-full bg-gradient-to-b from-primary">
      <MotionAppearView
        className="flex flex-col w-[calc(33%+36.5rem)] my-40"
        type="up"
      >
        <span className="text-2xl font-starL font-bold tracking-widest text-pastel">
          {t("videos.catchphrase")}
        </span>
        <div className="flex justify-between items-end">
          <span className="mt-2 font-starB text-6xl tracking-widest text-pastel">
            {t("videos")}
          </span>
          <MotionButton
            className="flex items-center gap-2"
            openUrl={"https://www.youtube.com/@Projecti_kr/videos"}
          >
            <span className="font-nanmumGEB font-bold text-xl text-pastel">
              {t("videos.more")}
            </span>
            <IconBoxMultiple color={colors.pastel} />
          </MotionButton>
        </div>
        <div className="flex justify-between mt-10">
          {videos.map((item, index) => (
            <HomeVideoItem key={index} index={index} />
          ))}
        </div>
      </MotionAppearView>
    </section>
  );
};

export default memo(HomeVideoSection);
