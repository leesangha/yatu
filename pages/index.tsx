import { GetSNP500 } from "@/utils/getSNP";
import dynamic from "next/dynamic";
import { useRef } from "react";

const Page = ({ page, navigation, settings }: any) => {
  const data = {
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
  const TreeChart = dynamic(() => import("../components/TreemapChart"), {
    ssr: false,
  });
  return <div>{/* <TreeChart data={data} options={options} /> */}</div>;
};

export default Page;
