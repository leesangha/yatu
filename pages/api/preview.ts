import { setPreviewData, redirectToPreviewURL } from "@prismicio/next";
import { createClient } from "../../prismicio";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: any, res: any) => {
  const client = createClient({ req });

  await setPreviewData({ req, res });

  await redirectToPreviewURL({ req, res, client });
};
