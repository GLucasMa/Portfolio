import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hola! Soy <span className="text-Teal">Lucas Gutierrez</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Desarrollador Web Full Stack, creador de ideas y soluciones digitales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-Orange hover:bg-Orangehv"
            >
              Mi trabajo
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Contactame
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;