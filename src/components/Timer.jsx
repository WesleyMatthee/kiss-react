import React from "react";
import { useStopwatch } from "react-timer-hook";

function MyStopwatch() {
  const { seconds, minutes, hours } = useStopwatch({ autoStart: true });
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "15px" }}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}

export default function Timer({ isActive, seconds, setSeconds }) {
  return (
    <div>
      <MyStopwatch />
    </div>
  );
}
