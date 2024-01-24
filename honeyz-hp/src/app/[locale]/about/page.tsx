import Image from "next/image";
import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import { LocaleProvider } from "@/app/[locale]/LocaleProvider";
import PageTitle from "@/components/layout/PageTitle";
import AboutMain from "/public/img/about-main.jpg";

export default async function About() {
  const locale = getCurrentLocale();
  const t = await getScopedI18n("page.about");

  return (
    <div className="flex flex-col items-center justify-cente">
      {/* 타이틀 */}
      <LocaleProvider locale={locale}>
        <PageTitle />
      </LocaleProvider>

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
      <span className="mt-16 text-xl font-bold leading-[2.5] text-center whitespace-pre-wrap font-nanum text-text">
        <span className="text-primary">{t("honeyz")}</span>
        {t("description")}
      </span>
    </div>
  );
}
