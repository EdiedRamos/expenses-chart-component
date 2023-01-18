import { useEffect, useState } from "react";

const DATA_DIR = "/src/store/data.json";

export const useDataList = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetch(DATA_DIR)
      .then((response) => response.json())
      .then((response) => {
        const maxMoney = response?.reduce((better, current) => {
          return Math.max(better, current.amount);
        }, 0);
        const withHeight = response?.map((current, index) => {
          return {
            ...current,
            height: Math.round((current.amount * 100) / maxMoney),
            index,
          };
        });
        setDataList(withHeight);
      });
  }, []);

  return [dataList];
};
