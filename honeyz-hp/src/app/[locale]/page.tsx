import Image from "next/image";
import BgLogo from "/public/img/bg-logo.png";
import "@/styles/text-gradient-animation.css";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <>
      <div className="relative mt-48">
        <div className="absolute top-0 left-1/2 w-1/3 -translate-x-full flex flex-col gap-16">
          <video
            className="w-full pointer-events-none rounded-2xl"
            muted
            autoPlay
            loop
          >
            <source src="/video/home_video.webm" type="video/webm" />
          </video>
          <span className="text-6xl font-nanumGEB tracking-widest">
            방송 보러가기 ->
          </span>
        </div>

        <div className="absolute top-14 right-1/2 translate-x-full pl-20 flex flex-col items-center gap-5">
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
      </div>
    </>
  );
}
