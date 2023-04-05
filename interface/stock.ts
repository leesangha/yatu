export interface IBasicStockType {
  v: number;
  vw: number;
  o: number;
  c: number;
  h: number;
  l: number;
  t: number;
  n: number;
}

export interface IStockHistoryResponse {
  ticker: string;
  queryCount: number;
  resultsCount: number;
  adjusted: boolean;
  results: IBasicStockType[];
  status: any;
  request_id: any;
  count: number;
}
