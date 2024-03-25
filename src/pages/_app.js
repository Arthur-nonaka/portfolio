import "@/styles/globals.scss";

import Head from "next/head";
import { Fragment } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio de Arthur Nonaka Oda" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
