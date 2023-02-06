import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio";
import { components } from "../slices";

const Page = ({ page, navigation, settings }: any) => {
  console.log(page);
  return <div>asdf</div>;
};

export default Page;

export async function getStaticProps({ previewData }: any) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "sanghalee");

  return {
    props: {
      page,
    },
  };
}
