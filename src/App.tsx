
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

import Contact from './components/Contact';
import Footer from './components/Footer';
import SmoothScroll from './animations/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-bg text-text-main font-sans selection:bg-primary/30 selection:text-white">
        <Header />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
