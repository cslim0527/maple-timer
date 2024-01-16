"use client";

import Card from "@/components/Card";
import BossFilter from "@/feat-components/BossFilter";
import { Boss, data } from "@/data";
import { useMemo, useState } from "react";
import Header from "@/components/Header";

export default function Home() {
  const [bossData, setBossData] = useState(data);
  const filteredBossList = useMemo(() => {
    return bossData.map((boss) => {
      if (boss?.isShow === undefined) {
        boss.isShow = true;
      }
      return boss;
    });
  }, [bossData]);

  const handleChangeCheckedBoss = (isChecked: boolean, bossName: string) => {
    setBossData((prevBossList) => {
      return prevBossList.map((boss) => {
        if (boss.name === bossName) {
          boss.isShow = isChecked;
        }
        return boss;
      });
    });
  };

  return (
    <>
      <Header />
      <main className="p-10">
        <BossFilter data={data} handleCheck={handleChangeCheckedBoss} />
        <div className="grid grid-cols-2 gap-4">
          {filteredBossList.map(
            ({ thumbnail, isShow, ...rest }, idx) =>
              isShow && (
                <Card
                  key={`boss-item-${idx}`}
                  thumbnail={thumbnail}
                  details={{ ...(rest as Boss) }}
                />
              )
          )}
        </div>
      </main>
    </>
  );
}
