"use client";

import { memo, useState } from "react";
import { motion } from "framer-motion";
import TalentCard from "@/components/TalentCard/TalentCard";
import { TalentData } from "@/components/TalentCard/TalentData";

const TalentList = () => {
  const [selectId, setSelectId] = useState<string>();
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-20">
        {TalentData.map((item) => (
          <TalentCard key={item.id} data={item} setSelectId={setSelectId} />
        ))}
      </div>

      {/* {selectId && (
        <>
          <div
            style={{
              zIndex: 40,
              position: "fixed",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              top: 0,
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              maxWidth: "990px",
            }}
          />
          <motion.div
            className="fixed top-20 left-100 z-50 bg-blue-500 w-20 h-20"
            layoutId={selectedId}
            initial={false}
          >
            <motion.h5>{"item.subtitle"}</motion.h5>
            <motion.h2>{"item.title"}</motion.h2>
            <motion.button onClick={() => setSelectedId(undefined)}>
              asdf
            </motion.button>
          </motion.div>
        </>
      )} */}
    </>
  );
};

export default memo(TalentList);
