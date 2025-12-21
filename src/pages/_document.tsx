import { Html, Head, Main, NextScript } from "next/document";
import { FacebookPixelHead, FacebookPixelNoscript } from "@/components/FacebookPixelDocument";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <FacebookPixelHead />
      </Head>
      <body className="antialiased">
        <noscript>
          <FacebookPixelNoscript />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
