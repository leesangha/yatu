import { createClient } from "@/prismicio";
import type { GetStaticPropsContext } from "next";
import * as prismicH from "@prismicio/helpers";
import { ProductViewer } from "@/components/ProductViewer";
import { ProductPageDocument } from "@/.slicemachine/prismicio";
import { ProductInfo } from "@/components/ProductInfo";
import styles from "@/styles/Product.module.css";

interface Props {
  page: ProductPageDocument<string>;
  id: string;
}

export default function Product({ page, id }: Props) {
  const { product_image, bool, key, price } = page.data;

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Contents}>
        <ProductViewer mainSrc={product_image} />
        <ProductInfo price={price} />
      </div>
    </div>
  );
}

type Params = {
  uid: string;
};

export async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext<Params>) {
  if (!params?.uid) return;

  const client = createClient({ previewData });

  const page = await client.getByUID("product_page", params.uid);

  return {
    props: { page, id: params.uid },
  };
}

// Define Paths
export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("product_page");

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  };
}
