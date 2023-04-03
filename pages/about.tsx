import CandleChart from "@/components/Chart";
import axios from "axios";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";

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

  const { data } = useQuery({ queryKey: ["key"], queryFn: getPosts });

  // console.log(props);
  return (
    <div>
      <CandleChart data={initialData} />
    </div>
  );
}

export const getPosts = async () => {
  const res = await axios.get(
    "https://twelve-data1.p.rapidapi.com/time_series",
    {
      params: {
        symbol: "AAPL",
        interval: "1day",
        outputsize: "30",
        format: "json",
      },
      headers: {
        "X-RapidAPI-Key": "a05428221emshd64f026887f40aep1b5399jsnbb11ee1fc348",
        "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
      },
    }
  );
  return res;
};

export async function getServerSiedProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["key"], getPosts);
  return {
    props: { dehydrateState: dehydrate(queryClient) },
  };
}
