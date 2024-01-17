"use client";

import Card from "@/components/Card";
import BossFilter from "@/feat-components/BossFilter";
import { Boss, data } from "@/data";
import { useCallback, useMemo, useState } from "react";
import Header from "@/components/Header";
import { TimeState } from "@/hooks/useTimer";

export default function Home() {
  const [bossData, setBossData] = useState(data);

  const filteredBossList = useMemo(() => {
    return bossData.map((boss) => {
      if (boss?.isShow === undefined) boss.isShow = true;
      if (boss?.isPlay === undefined) boss.isPlay = false;
      return boss;
    });
  }, [bossData]);

  const handleChangeCheckedBoss = useCallback(
    (isChecked: boolean, bossName: string) => {
      setBossData((prevBossList) => {
        return prevBossList.map((boss) => {
          if (boss.name === bossName) {
            boss.isShow = isChecked;
          }
          return boss;
        });
      });
    },
    []
  );

  const handleSyncFilterAndTimer = useCallback(
    (bossName: string, timeState: TimeState) => {
      setBossData((prevBossList) => {
        return prevBossList.map((boss) => {
          if (boss.name === bossName) {
            boss.isPlay = timeState === "play";
          }
          return boss;
        });
      });
    },
    []
  );

  return (
    <>
      <Header />
      <main className="p-10">
        <BossFilter
          data={filteredBossList}
          handleCheck={handleChangeCheckedBoss}
        />
        <div className="grid grid-cols-2 gap-4">
          {filteredBossList.map(
            ({ thumbnail, isShow, ...rest }, idx) =>
              isShow && (
                <Card
                  key={`boss-item-${idx}`}
                  isShow={isShow}
                  thumbnail={thumbnail}
                  details={{ ...(rest as Boss) }}
                  handleSyncFilterAndTimer={handleSyncFilterAndTimer}
                />
              )
          )}
        </div>
      </main>
    </>
  );
}
