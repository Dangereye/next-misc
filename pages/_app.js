import Head from "next/head";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import "styles/globals.scss";
import "styles/layout.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next Js Misc</title>
        <meta name="description" content="Next.js misc tutorial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
