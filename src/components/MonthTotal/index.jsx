import React from "react";

import "./styles.scss";

const MonthTotal = () => {
  return (
    <div className="month-total-container">
      <div id="total-this-month">
        <p>Total this month</p>
        <p>$478.33</p>
      </div>
      <div id="from-last-month">
        <p>+2.4%</p>
        <p>from last month</p>
      </div>
    </div>
  );
};

export default MonthTotal;
