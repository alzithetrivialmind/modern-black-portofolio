import Layout from './components/Layout';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import HowIWork from './components/HowIWork';
import { MotionConfig } from 'framer-motion';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Layout>
        <div className="space-y-16 mb-16 transition-colors duration-500">
          <Hero />
          <Projects />
          <Experience />
          <Education />
          <Skills />
          <HowIWork />
          <Contact />
        </div>
      </Layout>
    </MotionConfig>
  );
}

export default App;
