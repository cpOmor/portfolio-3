
import About from "./Component/ui/home/about/About";
import Contact from "./Component/ui/home/contact/Contact";
import Hero from "./Component/ui/home/hero/Hero";
import Skillet from "./Component/ui/home/skillet/Skillet";
import Projects from "./Component/ui/home/projects/Projects";
import Testimonial from "./Component/ui/home/testimonial/Testimonial";
import Services from "./Component/ui/home/services/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skillet />
      <Testimonial />
      <Contact />
    </main>
  );
}
