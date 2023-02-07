import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { repositoryName } from "../prismicio";
import Link from "next/link";
import Script from "next/script";
import Layout from "@/layout/Layout";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <Script src="https://pay.nicepay.co.kr/v1/js/"></Script>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PrismicPreview>
    </PrismicProvider>
  );
}
