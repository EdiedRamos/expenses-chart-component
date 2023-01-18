import React from "react";

import { Bar } from "../../components";

import { useDataList } from "../../hooks/useDataList";

import "./styles.scss";

const Bars = () => {
  const [dataList] = useDataList();
  return (
    <div className="bars-container">
      {dataList?.map((data) => (
        <Bar key={data.day} {...data} />
      ))}
    </div>
  );
};

export default Bars;
