
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollZoomSection from './components/ScrollZoomSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <ScrollZoomSection>
          <About />
        </ScrollZoomSection>
        <ScrollZoomSection>
          <Skills />
        </ScrollZoomSection>
        <ScrollZoomSection>
          <Projects />
        </ScrollZoomSection>
        <ScrollZoomSection>
          <Contact />
        </ScrollZoomSection>
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Lucas Gutierrez. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;