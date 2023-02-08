import { createClient } from "@/prismicio";
import type { GetStaticPropsContext } from "next";
import Image from "next/image";
import * as prismicH from "@prismicio/helpers";

export default function Product({ page, id }: any) {
  return (
    <div style={{ background: "white", paddingTop: 110 }}>
      <Image
        width={512}
        height={384}
        src={page.data.product_image.url}
        alt="asf"
      />
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
