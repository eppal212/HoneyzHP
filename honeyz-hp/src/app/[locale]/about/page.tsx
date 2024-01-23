import Image from "next/image";
import { getScopedI18n } from "@/locales/server";
import AboutMain from "/public/img/about-main.jpg";

export default async function About() {
  const t = await getScopedI18n("page.about");
  return (
    <div className="flex flex-col items-center pt-36 justify-cente">
      {/* 타이틀 */}
      <text className="mb-2 text-lg font-starL text-primary">
        {t("subtitle")}
      </text>
      <text className="z-[-1] text-6xl text-transparent font-starB drop-shadow-title bg-clip-text bg-gradient-to-r from-gradient1 via-gradient0 to-gradient1">
        {`[ ABOUT ]`}
      </text>

      {/* 소개 */}
      <div className="flex gap-10 mt-16">
        <Image
          className="rounded-2xl"
          src={AboutMain}
          alt="about-main"
          width={500}
        />
        <video
          muted
          autoPlay
          loop
          className="pointer-events-none h-[500px] rounded-2xl"
        >
          <source src="/video/home_video.webm" type="video/webm" />
        </video>
      </div>
      <text className="mt-16 text-xl font-bold leading-[2.5] text-center whitespace-pre-wrap font-nanum text-text">
        <text className="text-primary">{t("honeyz")}</text>
        {t("description")}
      </text>
    </div>
  );
}
