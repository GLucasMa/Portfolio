import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-gray-800">Portfolio</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">Conóceme</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">Habilidades</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projectos</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contacto</a>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/GLucasMa" className="text-gray-600 hover:text-gray-900">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/lucas-gutierrez-95777b268/" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
            </a>
            <a href="mailto:lucasgut3001@gmail.com" className="text-gray-600 hover:text-gray-900">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;