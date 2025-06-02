import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      "title": "Proyecto Club de Remo",
      "description": "Aplicación web full-stack para la gestión de socios y pagos en un club de remo. Desarrollada con Angular para el frontend y Node.js con NestJS para el backend, utilizando MySQL con TypeORM como ORM.",
      "media": "/ClubDeRemo-Tablero.mp4",
      "type": "video",
      "github": "https://github.com/ClubdeRemo/Tesis",
      "demo": "https://tesis-club.vercel.app/tablero",
      "tags": ["Angular", "Node.js", "NestJS", "MySQL", "TypeORM"]
    },
    {
      title: 'Calculadora',
      description: 'De mis primeros proyectos, realizado en 2023, una calculadora hecha con Python / Tkinter',
      media: '/calculadora.png',
      type: 'image',
      github: 'https://github.com/GLucasMa/Calculadora_tkinter',
      demo: 'https://replit.com/@lucasgut3001/Calculadoratkinter',
      tags: ['Python', 'Tkinter'],
      help: 'Haz clic en "Demo" para acceder a la calculadora, la cual he subido a Replit. Una vez allí, solo presiona "Run" para ejecutar la aplicación y ver cómo funciona.'
    },
    {
      title: 'Patitas',
      description: 'La aplicacion personal de mi emprendimiento "patitas", hecha con React, Node.js y MongoDB (aún en desarrollo)',
      media: '/Patitas.mp4',
      type: 'video',
      github: 'https://github.com/GLucasMa/Patitas',
      demo: '',
      tags: ['Node.js', 'Angular', 'NestJS']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Renderiza imagen o video según el tipo */}
              {project.type === 'video' ? (
                <video className="w-full h-48 object-cover" controls>
                  <source src={project.media} type="video/mp4" />
                  Tu navegador no soporta el video.
                </video>
              ) : (
                <img 
                  src={project.media} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Demo
                  </a>
                </div>
                {project.help && (
                  <p className="text-gray-500 text-sm mt-4">{project.help}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
