import Head from "next/head";

function News({ data }) {
  return (
    <>
      <Head>
        <title>News Page</title>
      </Head>
      <main className="main">
        <div className="container">
          <h1>{data}</h1>
        </div>
      </main>
    </>
  );
}

export default News;

export async function getStaticProps(context) {
  console.log("Running getStaticProps", context.previewData);
  return {
    props: {
      data: context.preview
        ? "List of draft articles"
        : "List of published articles",
    },
  };
}
