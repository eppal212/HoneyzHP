import Image from "next/image";
import BgLogo from "/public/img/bg-logo.png";
import "@/styles/text-gradient-animation.css";
import { twMerge } from "tailwind-merge";
import GoToLiveButton from "@/components/pages/home/GoToLiveButton";
import { LocaleProvider } from "@/app/[locale]/LocaleProvider";
import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import ParallaxText from "@/components/common/ParallaxText";
import AppearView from "@/components/layout/AppearView";
import HomeVideoSection from "@/components/pages/home/HomeVideoSection";

export default async function Home() {
  const locale = getCurrentLocale();
  const t = await getScopedI18n("page.home");

  return (
    <div className="flex flex-col items-center">
      {/* 상단부 */}
      <section className="flex flex-col items-center my-40">
        <div className="relative flex justify-center">
          {/* 비디오 + 버튼 */}
          <AppearView className="flex flex-col gap-16 w-1/3" type="right">
            <video
              className="w-full pointer-events-none rounded-2xl"
              muted
              autoPlay
              loop
            >
              <source src="/video/home_video.webm" type="video/webm" />
            </video>
            <LocaleProvider locale={locale}>
              <GoToLiveButton />
            </LocaleProvider>
          </AppearView>

          {/* 로고 */}
          <AppearView
            className="flex flex-col items-center gap-5 w-[33rem] mt-14 ml-14"
            type="left"
          >
            <span
              className={twMerge(
                "text-8xl font-logo tracking-widest gradient-text-primary",
                "text-gradient-animation"
              )}
            >
              HONEYZ
            </span>
            <Image className="pointer-events-none" src={BgLogo} alt="bg-logo" />
          </AppearView>
        </div>

        {/* 태그 */}
        <AppearView className="w-[calc(33%+36.5rem)] mt-12" type="up">
          <div
            className={twMerge(
              "flex justify-between w-full gradient-text-primary",
              "text-gradient-animation"
            )}
          >
            {t("tag")
              .split("|")
              .map((itme, index) => (
                <span
                  key={index}
                  className="text-xl font-nanumGEB text-center tracking-widest "
                >
                  {itme}
                </span>
              ))}
          </div>
        </AppearView>
      </section>

      {/* 멤버 섹션 */}
      <section className="w-full">
        <div className="w-full bg-primary py-1">
          <ParallaxText
            className="w-full bg-pastel"
            span={
              <span className="break-all text-2xl text-center font-starB text-primary tracking-widest">
                {"HoneyChurros Ohwayo DamYui AyaUke MangNae DDDDragon "}
              </span>
            }
            baseVelocity={2}
          />
        </div>

        <div className="bg-fixed w-full h-[calc(100vh*3/4)] bg-home-talents bg-center bg-cover" />

        <div className="w-full bg-pastel py-1">
          <ParallaxText
            className="w-full bg-primary"
            span={
              <span className="break-all text-2xl text-center font-starB text-pastel tracking-widest">
                {
                  "허니츄러스 오화요 담유이 아야 망내 디디디용 허니츄러스 오화요 담유이 아야 망내 디디디용 "
                }
              </span>
            }
            baseVelocity={2}
          />
        </div>
      </section>

      {/* 영상 섹션 */}
      <LocaleProvider locale={locale}>
        <HomeVideoSection />
      </LocaleProvider>
    </div>
  );
}
