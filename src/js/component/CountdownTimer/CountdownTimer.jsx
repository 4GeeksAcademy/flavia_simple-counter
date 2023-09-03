import React, { useState, useEffect } from "react";
import "./style.css";

const CountdownTimer = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <div className="bigContainer">
      <div className="countdownValue">{count}</div>
    </div>
  );
};

export default CountdownTimer;
