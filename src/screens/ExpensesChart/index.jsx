import React from "react";

import { MyBalance } from "../../components";
import { ExpensesChartBody } from "../../layouts";

import "./styles.scss";

const ExpensesChart = () => {
  return (
    <div className="expenses-chart-container">
      <MyBalance />
      <ExpensesChartBody />
    </div>
  );
};

export default ExpensesChart;
