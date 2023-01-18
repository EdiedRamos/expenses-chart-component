import { useEffect, useState } from "react";

const DATA_DIR = "/src/store/data.json";

const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

export const useDataList = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    // fetch(DATA_DIR)
    //   .then((response) => response.json())
    //   .then((response) => {
    //     const maxMoney = response?.reduce((better, current) => {
    //       return Math.max(better, current.amount);
    //     }, 0);
    //     const withHeight = response?.map((current, index) => {
    //       return {
    //         ...current,
    //         height: Math.round((current.amount * 100) / maxMoney),
    //         index,
    //       };
    //     });
    //     setDataList(withHeight);
    //   });
    const maxMoney = data?.reduce((better, current) => {
      return Math.max(better, current.amount);
    }, 0);
    const withHeight = data?.map((current, index) => {
      return {
        ...current,
        height: Math.round((current.amount * 100) / maxMoney),
        index,
      };
    });
    setDataList(withHeight);
  }, []);

  return [dataList];
};
