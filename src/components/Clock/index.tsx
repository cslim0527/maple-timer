import { useEffect, useRef } from "react";
import "./clock.css";
import { RemainTime } from "@/hooks/useTimer";

interface ClockProps {
  time: RemainTime;
}

const Clock = ({ time }: ClockProps) => {
  const digitRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const changeClockTime = (element: HTMLDivElement, digit: string) => {
      const show = element.querySelectorAll(`.n${digit}`);
      const hide = element.querySelectorAll(`:not(.n${digit})`);

      hide.forEach((el) => {
        el.classList.remove("active");
      });
      show.forEach((el) => {
        el.classList.add("active");
      });
    };

    const { minute, second } = time;
    changeClockTime(digitRef.current[0], minute[0]);
    changeClockTime(digitRef.current[1], minute[1]);
    changeClockTime(digitRef.current[2], second[0]);
    changeClockTime(digitRef.current[3], second[1]);
  }, [time]);

  return (
    <div className="clock">
      <div className="minutes">
        <div
          ref={(el) => {
            if (digitRef.current && digitRef.current.length < 4 && el) {
              digitRef.current.push(el);
            }
            return el;
          }}
          className="digit"
        >
          <div className="segment segment-1 n0 n2 n3 n5 n6 n7 n8 n9" />
          <div className="segment segment-2 n0 n4 n5 n6 n8 n9" />
          <div className="segment segment-3 n0 n1 n2 n3 n4 n7 n8 n9" />
          <div className="segment segment-4 n2 n3 n4 n5 n6 n8 n9" />
          <div className="segment segment-5 n0 n2 n6 n8" />
          <div className="segment segment-6 n0 n1 n3 n5 n4 n6 n7 n8 n9" />
          <div className="segment segment-7 n0 n2 n3 n5 n6 n8 n9" />
        </div>
        <div
          ref={(el) => {
            if (digitRef.current && digitRef.current.length < 4 && el) {
              digitRef.current.push(el);
            }
            return el;
          }}
          className="digit"
        >
          <div className="segment segment-1 n0 n2 n3 n5 n6 n7 n8 n9" />
          <div className="segment segment-2 n0 n4 n5 n6 n8 n9" />
          <div className="segment segment-3 n0 n1 n2 n3 n4 n7 n8 n9" />
          <div className="segment segment-4 n2 n3 n4 n5 n6 n8 n9" />
          <div className="segment segment-5 n0 n2 n6 n8" />
          <div className="segment segment-6 n0 n1 n3 n5 n4 n6 n7 n8 n9" />
          <div className="segment segment-7 n0 n2 n3 n5 n6 n8 n9" />
        </div>
      </div>
      <div className="colons colons-2">
        <div className="colon" />
        <div className="colon" />
      </div>
      <div className="seconds">
        <div
          ref={(el) => {
            if (digitRef.current && digitRef.current.length < 4 && el) {
              digitRef.current.push(el);
            }
            return el;
          }}
          className="digit"
        >
          <div className="segment segment-1 n0 n2 n3 n5 n6 n7 n8 n9" />
          <div className="segment segment-2 n0 n4 n5 n6 n8 n9" />
          <div className="segment segment-3 n0 n1 n2 n3 n4 n7 n8 n9" />
          <div className="segment segment-4 n2 n3 n4 n5 n6 n8 n9" />
          <div className="segment segment-5 n0 n2 n6 n8" />
          <div className="segment segment-6 n0 n1 n3 n5 n4 n6 n7 n8 n9" />
          <div className="segment segment-7 n0 n2 n3 n5 n6 n8 n9" />
        </div>
        <div
          ref={(el) => {
            if (digitRef.current && digitRef.current.length < 4 && el) {
              digitRef.current.push(el);
            }
            return el;
          }}
          className="digit"
        >
          <div className="segment segment-1 n0 n2 n3 n5 n6 n7 n8 n9" />
          <div className="segment segment-2 n0 n4 n5 n6 n8 n9" />
          <div className="segment segment-3 n0 n1 n2 n3 n4 n7 n8 n9" />
          <div className="segment segment-4 n2 n3 n4 n5 n6 n8 n9" />
          <div className="segment segment-5 n0 n2 n6 n8" />
          <div className="segment segment-6 n0 n1 n3 n5 n4 n6 n7 n8 n9" />
          <div className="segment segment-7 n0 n2 n3 n5 n6 n8 n9" />
        </div>
      </div>
    </div>
  );
};

export default Clock;
