import Image from "next/image";
import BgLogo from "/public/img/bg-logo.png";
import "@/styles/text-gradient-animation.css";
import { twMerge } from "tailwind-merge";
import GoToLiveButton from "@/components/pages/home/GoToLiveButton";
import { LocaleProvider } from "./LocaleProvider";
import { getCurrentLocale } from "@/locales/server";
import ParallaxText from "@/components/common/ParallaxText";

export default function Home() {
  const locale = getCurrentLocale();
  return (
    <div className="flex flex-col">
      {/* 상단부 */}
      <section className="relative flex justify-center my-48">
        <div className="flex flex-col gap-16 w-1/3">
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
        </div>

        <div className="flex flex-col items-center gap-5 mt-14 ml-14">
          <span
            className={twMerge(
              "text-8xl font-logo tracking-widest gradient-text-primary",
              "text-gradient-animation"
            )}
          >
            HONEYZ
          </span>
          <Image
            className="pointer-events-none"
            src={BgLogo}
            alt="bg-logo"
            width={500}
          />
        </div>
      </section>

      {/* 멤버 섹션 */}
      <section>
        <ParallaxText
          className="w-full bg-primary"
          span={
            <span className="break-all text-2xl text-center font-starB text-white tracking-widest">
              {"HoneyChurros Ohwayo DamYui AyaUke MangNae DDDDragon "}
            </span>
          }
          baseVelocity={2}
        />
      </section>
    </div>
  );
}
