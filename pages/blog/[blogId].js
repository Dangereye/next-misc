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
          <p>Public variable: {process.env.NEXT_PUBLIC_PUBLIC_VARIABLE}</p>
        </div>
      </main>
    </>
  );
}

export default Blog;

export async function getServerSideProps() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log(
    `Connecting to database with username ${user} and password ${password}`
  );
  return {
    props: {
      title: "Article Title",
      description: "Article description",
    },
  };
}
