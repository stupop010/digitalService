import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";

import Hero from "../component/Hero";

export default function Home() {
  return (
    <div>
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
