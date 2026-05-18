import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import SmoothScroll from './animations/SmoothScroll';


function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <SmoothScroll>
        <div className="min-h-screen text-text-main font-sans selection:bg-primary/30 selection:text-white relative z-0">
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
    </>
  );
}

export default App;
