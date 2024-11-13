// Smooth scroll animation (https://lenis.darkroom.engineering/)
import { ReactLenis } from "lenis/react";

// Scroll animation (https://gsap.com/)
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// Register gsap plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

// Components
import { Header } from "./components/Header";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Skill } from "./components/Skills/Skill";
import { Work } from "./components/Works/Work";
// import { Review } from "./components/Reviews/Review";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        {/* <Review /> */}
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
}

export default App;
