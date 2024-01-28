import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Image from "next/image";
import { getCurrentLocale } from "@/locales/server";
import { LocaleProvider } from "@/app/[locale]/LocaleProvider";
import "@/styles/global.css";

import TopMenu from "@/components/layout/TopMenu";
import Footer from "@/components/layout/Footer";

import BgTop from "/public/img/bg-top.png";
import BgLogo from "/public/img/bg-logo.png";

const inter = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = getCurrentLocale();

  return (
    <html lang="ko">
      <body className={(inter.className, "relative bg-bg")}>
        {/* 헤더 */}
        <TopMenu />
        <Image
          className="absolute top-0 left-0 opacity-5 -z-10 pointer-events-none"
          src={BgTop}
          alt="bg-logo"
          width={500}
        />
        {/* 본문 */}
        <div className="h-auto min-h-screen mb-32">{children}</div>
        {/* 워터마크 */}
        <div className="sticky bottom-0">
          <Image
            className="absolute bottom-10 right-10 opacity-5 -z-10 pointer-events-none"
            src={BgLogo}
            alt="bg-logo"
            width={500}
          />
        </div>
        {/* 푸터 */}
        <LocaleProvider locale={locale}>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
