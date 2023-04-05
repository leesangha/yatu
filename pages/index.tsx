import { GetSNP500 } from "@/utils/getSNP";

const Page = ({ page, navigation, settings }: any) => {
  console.log(GetSNP500().length);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
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
