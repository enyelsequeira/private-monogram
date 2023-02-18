import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Enyel Sequeira Monogram design",
    description:
      "This is a simple monogram file for Enyel Sequeira. It is a design test for Monogram. ",
    image: "/3d.svg",
  };
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <link rel="icon" href={meta.image} sizes="32x32" />
      </Head>
      <body className="mx-auto max-w-[1512px] ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
