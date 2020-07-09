import Head from "next/head";

import Hero from "../component/Hero";
import Services from "../component/Services";

export default function Home() {
  return (
    <div>
      {/* Main */}
      <main>
        <Hero />
        <Services />
      </main>

      {/* Footer */}
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}
