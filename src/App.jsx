import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import About from './components/About';
import Projects from './components/Projects';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50">
      <Navbar />
      <Hero />
      <Impact />
      <About />
      <Projects />
      <CallToAction />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
