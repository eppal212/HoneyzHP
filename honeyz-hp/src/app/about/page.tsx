import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center pt-36 justify-cente">
      {/* 타이틀 */}
      <text className="mb-2 text-lg font-starL text-primary">
        허니즈가 궁금해?
      </text>
      <text className="z-[-1] text-6xl text-transparent font-starB drop-shadow-title bg-clip-text bg-gradient-to-r from-gradiant1 via-gradiant0 to-gradiant1">
        {`[ ABOUT ]`}
      </text>

      {/* 소개 */}
      <div className="flex gap-10 mt-16">
        <Image
          className="rounded-2xl"
          src="/img/about-main.jpg"
          alt="about-main"
          width={500}
          height={500}
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
        <text className="text-primary">허니즈(Honeyz)</text>
        {`는 Project[i] 소속의 6인조 버츄얼 유튜버 그룹입니다.\n각자 독특한 매력과 재능을 가진 구성원들이,\n다양한 콘텐츠를 통해 팬들과 소통하고 즐거운 순간을 나누기 위해 모였습니다.\n함께 웃고 함께 성장하며 행복한 시간을 만들어 나가는 것이 허니즈의 목표입니다. (아마도)`}
      </text>
    </div>
  );
}
