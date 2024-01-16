import { useCallback, useEffect, useMemo, useState } from "react";

interface UseTimer {
  startTime: number;
}

export type TimeState = "wait" | "play";
export type RemainTime = {
  minute: string;
  second: string;
};

export const useTimer = ({ startTime }: UseTimer) => {
  const initialTime = startTime * 60;
  const [isStart, setIsStart] = useState(false);
  const [time, setTime] = useState(initialTime);

  const remainTime = useMemo(() => {
    const minute = `${Math.floor(time / 60)}`.padStart(2, "0");
    const second = `${time % 60}`.padStart(2, "0");
    return { minute, second };
  }, [time]);

  const timeState: TimeState = useMemo(() => {
    if (isStart) {
      return "play";
    }

    return "wait";
  }, [isStart]);

  const handleStartTimer = useCallback(() => {
    setIsStart(true);
  }, []);

  const handleReStartTimer = useCallback(() => {
    setTime(initialTime);
  }, [initialTime]);

  const handleOffTimer = useCallback(() => {
    setIsStart(false);
    setTime(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (!isStart) return;
    if (remainTime.minute === "00" && remainTime.second === "00") {
      handleOffTimer();
      return;
    }

    const timerId = setInterval(() => {
      setTime((currentTime) => currentTime - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [handleOffTimer, isStart, remainTime]);

  return {
    time: remainTime,
    timeState,
    handleStartTimer,
    handleReStartTimer,
    handleOffTimer,
  };
};
