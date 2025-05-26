
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Sobre mí</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <img 
                src="yo.jpg" 
                alt="Profile" 
                className="rounded-full w-48 h-48 object-cover mx-auto"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-600 text-about">
                Me gusta transformar ideas en soluciones digitales funcionales y bien diseñadas. 
              Como desarrollador web, me enfoco en crear aplicaciones que sean intuitivas, eficientes y atractivas 
              para el usuario. 
                Cada proyecto es una oportunidad para mejorar y encontrar el equilibrio entre 
              creatividad y rendimiento técnico. Disfruto enfrentar nuevos retos y aprender tecnologías que aporten valor 
              real a los proyectos en los que participo.
                Mi objetivo es simple: desarrollar soluciones que cumplan su propósito 
              de manera efectiva y bien ejecutada. Deseo aprender de cada proyecto y seguir creciendo, 
              contribuyendo al desarrollo y evolución de esta apasionante área de la tecnología.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;