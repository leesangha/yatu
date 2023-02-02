import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio";
import { components } from "../slices";

const Page = ({ page, navigation, settings }: any) => {
  console.log(page);
  return <div>asdf</div>;
};

export default Page;

export async function getServerSideProps({ previewData }: any) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "second");

  return {
    props: {
      page,
    },
  };
}
