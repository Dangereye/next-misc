import Head from "next/head";
import Image from "next/image";
import img from "../public/6.jpg";

function Pets() {
  return (
    <>
      <Head>
        <title>Pets Page</title>
      </Head>
      <main className="main">
        <div className="container">
          <h1>Pets Page</h1>
          <div className="gallery">
            {["1", "2", "3", "4", "5"].map((path) => (
              <div className="gallery__item" Key={`item-${path}`}>
                <Image
                  src={`/${path}.jpg`}
                  alt={`Image-${path}`}
                  width="250"
                  height="250"
                  layout="responsive"
                />
              </div>
            ))}
            <div className="gallery__item">
              <Image
                className="gallery__item"
                src={img}
                alt="Image 6"
                width="250"
                height="250"
                layout="responsive"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Pets;
