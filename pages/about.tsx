import CandleChart from "@/components/Chart";

export default function About({ props }: any) {
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
  return (
    <div>
      <CandleChart data={initialData} />
    </div>
  );
}

export async function getServerSiedProps() {
  const options = {
    method: "GET",
    url: "https://quotient.p.rapidapi.com/equity/daily",
    params: {
      symbol: "AAPL",
      from: "2018-04-01",
      to: "2020-04-21",
      adjust: "false",
    },
    headers: {
      "X-RapidAPI-Key": "a05428221emshd64f026887f40aep1b5399jsnbb11ee1fc348",
      "X-RapidAPI-Host": "quotient.p.rapidapi.com",
    },
  };

  return {
    props: {},
  };
}
