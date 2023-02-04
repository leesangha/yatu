import { createClient } from "../prismicio";

export default function About({ props }: any) {
  console.log(props);
  return <div>{props.data}</div>;
}

export async function getServerSideProps({ previewData }: any) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "about");

  return {
    props: { page },
  };
}
