import type { GetStaticPropsContext } from "next";
import { ProductViewer } from "@/components/ProductViewer";
import { ProductInfo } from "@/components/ProductInfo";
import styles from "@/styles/Product.module.css";

interface Props {
  id: string;
}

export default function Product({ id }: Props) {
  return <div className={styles.Wrapper}></div>;
}
