import Image from "next/image";
import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import { LocaleProvider } from "@/app/[locale]/LocaleProvider";
import PageTitle from "@/components/layout/PageTitle";
import AboutMain from "/public/img/about-main.jpg";
import AppearView from "@/components/layout/AppearView";

const Paragraph = async ({ index }: { index: number }) => {
  const t = await getScopedI18n("page.guideline.contents");
  const getText = () => {
    switch (index) {
      case 0:
        return { title: t("title0"), desc: t("desc0") };
      case 1:
        return { title: t("title1"), desc: t("desc1") };
      case 2:
        return { title: t("title2"), desc: t("desc2") };
      case 3:
        return { title: t("title3"), desc: t("desc3") };
    }
  };
  return (
    <AppearView className="flex flex-col mt-16 gap-3" type="up">
      <h1 className="text-3xl font-nanum font-bold text-text">
        {getText()?.title}
      </h1>
      <p className="text-xl leading-[1.5] whitespace-pre-wrap font-nanum text-text">
        {getText()?.desc}
      </p>
    </AppearView>
  );
};

export default async function About() {
  const locale = getCurrentLocale();
  return (
    <div className="flex flex-col items-center justify-cente">
      {/* 타이틀 */}
      <LocaleProvider locale={locale}>
        <PageTitle />
      </LocaleProvider>

      {/* 내용 */}
      <div className="flex flex-col gap-6">
        {[...Array(5)].map((_, index) => (
          <Paragraph key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
