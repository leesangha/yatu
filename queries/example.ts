import { getHostURL } from "@/utils/getUrl";
import { request } from ".";
const baseURL = getHostURL();

export const getStocksAPI: { [key: string]: any } = {
  all: (params: any) => {
    return {
      url: `${baseURL}/v2/aggs/ticker/AAPL/range/1/day/2023-01-01/2023-04-04`,
      method: "get",
    };
  },
};

const KEYS = {
  ALL: ["key"],
};

export function getStockQuery(payload?: any): any {
  return {
    queryKey: KEYS.ALL,
    queryFn: () => request(getStocksAPI.all(payload)),
  };
}
