import React from "react";

import "./styles.scss";

const today = new Date().getDay();

const Bar = ({ day, amount, height, index }) => {
  return (
    <div
      data-day={day}
      data-money={`$${amount}`}
      className={`bar ${(index + 1) % 7 === today ? "today" : ""}`}
      style={{ height: `${height}%` }}
    />
  );
};

export default Bar;
