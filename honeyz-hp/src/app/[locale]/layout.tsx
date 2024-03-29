import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Image from "next/image";
import { getCurrentLocale } from "@/locales/server";
import { LocaleProvider } from "@/app/[locale]/LocaleProvider";
import "@/styles/global.css";

import TopMenu from "@/components/layout/TopMenu";
import Footer from "@/components/layout/Footer";
import Wartermark from "@/components/layout/Wartermark";

import BgTop from "/public/img/bg-top.png";

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
      <body className={(inter.className, "bg-pastel")}>
        {/* 헤더 */}
        <Image
          className="absolute top-0 left-0 opacity-5 -z-10 pointer-events-none"
          src={BgTop}
          alt="bg-logo"
          width={500}
        />

        <TopMenu />
        {/* 본문 */}
        <div className="h-auto min-h-screen mb-32">{children}</div>

        {/* 워터마크 */}
        <LocaleProvider locale={locale}>
          <Wartermark />
        </LocaleProvider>

        {/* 푸터 */}
        <LocaleProvider locale={locale}>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
