import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";

import Hero from "../component/Hero";

export default function Home() {
  return (
    <div>
      <CssBaseline />
      {/* Header */}
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      {/* Main */}
      <main>
        <Hero />
        <p>hello</p>
      </main>

      {/* Footer */}
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}
