import Image from "next/image";
import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import { LocaleProvider } from "@/app/[locale]/LocaleProvider";
import PageTitle from "@/components/layout/PageTitle";
import AboutMain from "/public/img/about-main.jpg";
import AppearView from "@/components/layout/AppearView";

export default async function About() {
  const locale = getCurrentLocale();
  const t = await getScopedI18n("page.about");

  return (
    <div className="flex flex-col items-center justify-center">
      {/* 타이틀 */}
      <LocaleProvider locale={locale}>
        <PageTitle />
      </LocaleProvider>

      {/* 소개 */}
      <div className="flex gap-10 mt-16">
        {/* 사진 */}
        <AppearView type="right">
          <Image
            className="rounded-2xl"
            src={AboutMain}
            alt="about-main"
            width={500}
          />
        </AppearView>
        {/* 비디오 */}
        <AppearView type="left">
          <video
            muted
            autoPlay
            loop
            className="pointer-events-none h-[500px] rounded-2xl"
          >
            <source src="/video/home_video.webm" type="video/webm" />
          </video>
        </AppearView>
      </div>
      {/* 문구 */}
      <AppearView className="mt-16" type="up">
        <p className="text-xl font-bold leading-[2.5] text-center whitespace-pre-wrap font-nanumR text-text">
          <span className="text-primary">{t("honeyz")}</span>
          {t("description")}
        </p>
      </AppearView>
    </div>
  );
}
