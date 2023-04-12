import CandleChart from "@/components/Chart";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { getHostURL } from "@/utils/getUrl";
import { getStockQuery } from "@/queries/example";
import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/Card";
import { IBasicStockType, IStockHistoryResponse } from "@/interface/stock";
import dynamic from "next/dynamic";

const TreeChart = dynamic(() => import("../components/TreemapChart"), {
  ssr: false,
});

export default function About(props: any) {
  const initialData = [
    { time: "2018-12-22", value: 32.51 },
    { time: "2018-12-23", value: 31.11 },
    { time: "2018-12-24", value: 27.02 },
    { time: "2018-12-25", value: 27.32 },
    { time: "2018-12-26", value: 25.17 },
    { time: "2018-12-27", value: 28.89 },
    { time: "2018-12-28", value: 25.46 },
    { time: "2018-12-29", value: 23.92 },
    { time: "2018-12-30", value: 22.68 },
    { time: "2018-12-31", value: 22.67 },
  ];

  const { data, status } = useQuery<IStockHistoryResponse>(getStockQuery());
  const datas = {
    series: [
      {
        label: "Documents",
        children: [
          {
            label: "docs",
            children: [
              {
                label: "pages",
                data: 1.3,
              },
              {
                label: "keynote",
                data: 2.5,
              },
              {
                label: "numbers",
                data: 1.2,
              },
            ],
          },
          {
            label: "photos",
            data: 5.5,
          },
          {
            label: "videos",
            data: 20.7,
          },
        ],
      },
      {
        label: "Downloads",
        children: [
          {
            label: "recent",
            data: 5.3,
          },
          {
            label: "2020",
            data: 10.1,
          },
          {
            label: "2019",
            data: 8.2,
          },
        ],
      },
      {
        label: "Application",
        data: 16.4,
      },
      {
        label: "Desktop",
        data: 4.5,
      },
    ],
  };
  const options = {
    chart: { title: "Used disk space", width: 900, height: 500 },
    tooltip: { formatter: (value: any) => `${value}GB` },
    series: {
      dataLabels: {
        visible: true,
        useTreemapLeaf: true,
      },
    },
  };

  return (
    <div>
      {/* <CandleChart data={initialData} /> */}
      <TreeChart data={datas} options={options} />
    </div>
  );
}
