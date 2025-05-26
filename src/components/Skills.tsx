
const Skills = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Angular', 'Tailwind CSS', 'CSS', 'HTML'] },
    { category: 'Backend', items: ['Node.js', 'NestJS', 'Express.js', 'REST APIs', 'Python'] },
    { category: 'Databases', items: ['MySQL'] },
    { category: 'DevOps', items: ['CI/CD', 'Docker'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Trello', 'ThunderClient / Postman'] },
    { category: 'Other', items: ['Scrum', 'Design patterns'] }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-Teal">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-gray-600">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
