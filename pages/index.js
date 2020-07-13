import Hero from "../component/Hero";
import Services from "../component/Services";
import Work from "../component/Work";
import Blog from "../component/Blog";
import Testimonials from "../component/Testimonials";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <div>
      {/* Main */}
      <main>
        <Hero />
        <Services />
        <Work />
        <Blog />
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
