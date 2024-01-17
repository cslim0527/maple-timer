import { TimeState, useTimer } from "@/hooks/useTimer";
import Image from "next/image";
import Button from "../Button";
import Clock from "../Clock";
import Item from "../Item";
import { Boss } from "@/data";
import { useEffect, useMemo } from "react";

interface CardProps {
  isShow: boolean;
  children?: React.ReactNode;
  thumbnail: Boss["thumbnail"];
  details: Boss;
  handleSyncFilterAndTimer: (bossName: string, timeState: TimeState) => void;
}

const Card = ({
  isShow,
  children,
  thumbnail,
  details,
  handleSyncFilterAndTimer,
}: CardProps) => {
  const {
    time,
    timeState,
    handleOffTimer,
    handleStartTimer,
    handleReStartTimer,
  } = useTimer({ startTime: details.zenDelay });

  const thumbnailSrc = useMemo(() => {
    return timeState === "wait" ? thumbnail.on : thumbnail.off;
  }, [timeState]);

  useEffect(() => {
    handleSyncFilterAndTimer(details.name, timeState);
  }, [timeState]);

  return (
    <div
      style={{ width: "100%", height: 350, display: isShow ? "flex" : "none" }}
      className="flex bg-white rounded-lg shadow w-60 dark:bg-gray-700"
    >
      <div
        style={{ width: 240, flexShrink: 0 }}
        className="relative flex flex-col items-center z-10 border border-gray-100"
      >
        <span
          data-tooltip-target="tooltip-dark"
          data-tooltip-style="dark"
          className="absolute top-3 right-3 inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-500 text-white cursor-default"
        >
          {details.name}
        </span>
        <div
          id="tooltip-dark"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
        >
          Tooltip content
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div style={{ height: 200 }}>
          <Image
            width={132}
            height={116}
            src={thumbnailSrc}
            alt={thumbnailSrc}
          />
        </div>

        <div className="p-4 w-full">
          <Clock time={time} />
          <p className="mt-1 text-gray-500 dark:text-gray-400"></p>
          <div className="mt-3">
            {timeState !== "play" ? (
              <Button color="lime" type="button" onClick={handleStartTimer}>
                보스 킬
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button color="gray" type="button" onClick={handleOffTimer}>
                  끄기
                </Button>

                <Button color="blue" onClick={handleReStartTimer}>
                  재시작
                </Button>
              </div>
            )}
          </div>
          {children}
        </div>
      </div>
      <div className="flex p-5 w-full">
        <div className="shrink-0 mr-20">
          <p className="text-xl font-bold dark:text-white mb-2">정보</p>
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            {details.info.map(({ name, value }, idx) => (
              <li className="text-sm text-gray-800" key={`info-item-${idx}`}>
                {name} : {value}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xl font-bold dark:text-white mb-2">드랍템</p>
          <div
            className="overflow-scroll"
            style={{ overscrollBehaviorY: "none", height: "calc(100% - 40px)" }}
          >
            <div className="flex flex-wrap gap-2 w-full items-start content-start ">
              {details.drop.map(({ name, image }, idx) => (
                <Item key={`drop-item-${idx}`} name={name} image={image} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
