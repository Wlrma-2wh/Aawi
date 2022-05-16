import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout";
import wrapper from "../store/configureStore";
// import { GlobalStyle } from "../styles/global-style";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>boilerplate</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
