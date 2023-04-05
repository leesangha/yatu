import { getHostURL } from "@/utils/getUrl";
import { request } from ".";
const baseURL = getHostURL();

export const getStocksAPI: { [key: string]: any } = {
  all: (params: any) => ({
    url: `${baseURL}/stocks`,
    method: "get",
    params,
  }),
};

const KEYS = {
  ALL: ["key"],
};
export const getStockQuery = (payload: any) => {
  return {
    queryKey: KEYS.ALL,
    queryFn: () => request<any>(getStocksAPI.all(payload)),
  };
};
