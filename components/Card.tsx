import { IBasicStockType } from "@/interface/stock";

interface Props {
  data: any;
}

export const Card = ({ data }: Props) => {
  return (
    <div style={{ padding: 20 }}>
      <ol>{data.country}</ol>
      <ol>{data.currency}</ol>
      <ol>{data.exchange}</ol>
      <ol>{data.mic_code}</ol>
      <ol>{data.name}</ol>
      <ol>{data.symbol}</ol>
      <ol>{data.type}</ol>
    </div>
  );
};
