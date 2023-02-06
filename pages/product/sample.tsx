import { createClient } from "@/prismicio";
import Image from "next/image";

export default function Sample({ page }: any) {
  console.log(page);
  return (
    <div style={{ background: "white" }}>
      <Image
        width={512}
        height={384}
        src={page.data.product_image.url}
        alt="asf"
      />
    </div>
  );
}

export async function getStaticProps({ previewData }: any) {
  const client = createClient({ previewData });

  const page = await client.getByUID("product_page", "sample");

  return { props: { page } };
}
