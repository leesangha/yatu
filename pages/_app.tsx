import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Layout from "@/layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <Script src="https://pay.nicepay.co.kr/v1/js/"></Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
