import Head from "next/head";

import Hero from "../component/Hero";
import Services from "../component/Services";
import Work from "../component/Work";

export default function Home() {
  return (
    <div>
      {/* Main */}
      <main>
        <Hero />
        <Services />
        <Work />
      </main>

      {/* Footer */}
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}
