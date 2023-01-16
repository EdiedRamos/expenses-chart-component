import React from "react";
import { MonthTotal } from "../../components";

import "./styles.scss";

const ExpensesChartBody = () => {
  return (
    <div className="expenses-chart-body-container">
      <h2>Spending - Last 7 days</h2>
      <hr />
      <MonthTotal />
    </div>
  );
};

export default ExpensesChartBody;
