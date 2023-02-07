import { createClient } from "../prismicio";
import { components } from "../slices";

const Page = ({ page, navigation, settings }: any) => {
  function serverAuth() {
    if (typeof window !== "undefined") {
      const pay_obj: any = window;
      const { AUTHNICE } = pay_obj;
      AUTHNICE.requestPay({
        //NOTE :: 발급받은 클라이언트키 clientId에 따라 Server / Client 방식 분리
        clientId: process.env.NEXT_PUBLIC_CLIENTID,
        method: "card",
        //NOTE :: 상품 구매 id 값
        orderId: random(),
        // NOTE :: 가격
        amount: 1004,
        // NOTE :: 상품명
        goodsName: "나이스페이-상품",
        //NOTE :: API를 호출할 Endpoint 입력
        returnUrl: "http://localhost:3000/paysuccess",
        // NOTE :: err 발생시 실행 함수
        fnError: (result: any) => {
          alert(
            "고객용메시지 : " +
              result.msg +
              "\n개발자확인용 : " +
              result.errorMsg +
              ""
          );
        },
      });
    }
  }
  //Test orderId 생성
  const random = (length = 8) => {
    return Math.random().toString(16).substr(2, length);
  };
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
      <button onClick={() => serverAuth()}>serverAuth 결제하기</button>
    </div>
  );
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
