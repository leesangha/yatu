import CandleChart from "@/components/Chart";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { getHostURL } from "@/utils/getUrl";
import { getStockQuery } from "@/queries/example";
import { useState } from "react";
import { Card } from "@/components/Card";
import { IBasicStockType } from "@/interface/stock";

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

  const [state, setState] = useState("a");
  const { data, status } = useQuery<IBasicStockType[]>(
    getStockQuery({ exchange: "NASDAQ", format: "json" })
  );

  return (
    <div>
      <CandleChart data={initialData} />
      {data?.slice(0, 10).map((dt) => {
        return <Card key={JSON.stringify(dt)} data={dt} />;
      })}
    </div>
  );
}

export async function getServerSiedProps() {
  const queryClient = new QueryClient();
  // prefetch할 query 미리 설정
  // await queryClient.prefetchQuery(["key"], asyncFunc);
  return {
    props: { dehydrateState: dehydrate(queryClient) },
  };
}
