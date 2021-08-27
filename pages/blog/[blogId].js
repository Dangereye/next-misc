import Head from "next/head";

function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main className="main">
        <div className="container">
          <h1>Blog Page</h1>
        </div>
      </main>
    </>
  );
}

export default Blog;

export async function getServerSideProps() {
  return {
    props: {
      title: "Article Title",
      description: "Article description",
    },
  };
}
