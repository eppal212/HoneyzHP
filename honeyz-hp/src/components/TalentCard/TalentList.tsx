"use client";

import { memo, useState } from "react";
import { LocaleProvider } from "@/app/[locale]/LocaleProvider";
import { useCurrentLocale } from "@/locales/client";
import TalentCard from "@/components/TalentCard/TalentCard";
import { TalentData } from "@/components/TalentCard/TalentData";
import TalentExpand from "@/components/TalentCard/TalentExpand";
import { motion } from "framer-motion";

const TalentList = () => {
  const locale = useCurrentLocale();
  const [selectId, setSelectId] = useState<string>();
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-20">
        {TalentData.map((item) => (
          <motion.div key={item.id} layoutId={item.id}>
            <TalentCard data={item} setSelectId={setSelectId} />
          </motion.div>
        ))}
      </div>

      {selectId && (
        <LocaleProvider locale={locale}>
          <TalentExpand id={selectId} onClose={() => setSelectId(undefined)} />
        </LocaleProvider>
      )}
    </>
  );
};

export default memo(TalentList);
