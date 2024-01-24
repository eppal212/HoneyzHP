import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Image from "next/image";
import { getCurrentLocale } from "@/locales/server";
import { LocaleProvider } from "@/app/[locale]/LocaleProvider";
import "@/styles/global.css";

import TopMenu from "@/components/layout/TopMenu";
import Footer from "@/components/layout/Footer";

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
      <body className={(inter.className, "bg-bg")}>
        <TopMenu />
        {children}
        <Image
          className="fixed bottom-0 right-0 opacity-5 z-[-1] pointer-events-none"
          src={BgLogo}
          alt="bg-logo"
          width={500}
        />
        <LocaleProvider locale={locale}>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
