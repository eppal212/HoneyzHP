import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import { LocaleProvider } from "@/app/[locale]/LocaleProvider";
import PageTitle from "@/components/layout/PageTitle";
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
    <AppearView className="flex flex-col gap-3" type="up">
      <h2 className="text-3xl font-nanum font-bold text-dark">
        {getText()?.title}
      </h2>
      <p className="text-xl leading-[1.5] whitespace-pre-wrap font-nanum text-dark">
        {getText()?.desc}
      </p>
    </AppearView>
  );
};

export default async function About() {
  const locale = getCurrentLocale();
  const t = await getScopedI18n("page.guideline.contents");
  return (
    <div className="flex flex-col items-center justify-center">
      {/* 타이틀 */}
      <LocaleProvider locale={locale}>
        <PageTitle />
      </LocaleProvider>

      <AppearView className="flex flex-col mt-20 gap-5" type="up">
        <h1 className="text-4xl font-nanum font-bold text-dark text-center">
          {t("header.title")}
        </h1>
        <p className="text-xl font-nanum text-dark text-center">
          {t("header.desc")}
        </p>
      </AppearView>

      {/* 내용 */}
      <div className="flex flex-col gap-20 mt-16">
        {[...Array(4)].map((_, index) => (
          <Paragraph key={index} index={index} />
        ))}
      </div>
      <AppearView type="up">
        <p className="text-xl leading-[1.5] whitespace-pre-wrap font-nanum text-dark text-center mt-24">
          {t("footer")}
        </p>
      </AppearView>
    </div>
  );
}
