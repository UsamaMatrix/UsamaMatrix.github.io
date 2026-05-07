import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import UzyntraSection from "./components/UzyntraSection";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import SecurityPhilosophy from "./components/SecurityPhilosophy";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <UzyntraSection />
        <Skills />
        <Timeline />
        <SecurityPhilosophy />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
