import Image from "next/image";
import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import { LocaleProvider } from "@/app/[locale]/LocaleProvider";
import PageTitle from "@/components/layout/PageTitle";
import TalentGrid from "@/components/pages/talents/talent-card/TalentGrid";

export default async function Talents() {
  const locale = getCurrentLocale();
  const t = await getScopedI18n("page.about");

  return (
    <div className="flex flex-col items-center justify-center">
      {/* 타이틀 */}
      <LocaleProvider locale={locale}>
        <PageTitle />
      </LocaleProvider>

      <div className="flex gap-10 mt-24">
        <TalentGrid />
      </div>
    </div>
  );
}
