import { PrismicPreview } from "@prismicio/next";
import { createClient } from "../prismicio";
import { components } from "../slices";

const Page = ({ page, navigation, settings }: any) => {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {}
    </div>
  );
};

export default Page;

export async function getStaticProps({ previewData }: any) {
  const client = createClient({ previewData });

  const page = await client.getSingle("homepage");

  return {
    props: {
      page,
    },
  };
}
