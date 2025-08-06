import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  {
    id: 1,
    title: "Sala de Estar Minimalista",
    category: "Residencial",
    image: project1,
    description: "Diseño contemporáneo con líneas limpias y colores neutros"
  },
  {
    id: 2,
    title: "Cocina Moderna",
    category: "Residencial",
    image: project2,
    description: "Funcionalidad y elegancia en mármol y tonos cálidos"
  },
  {
    id: 3,
    title: "Dormitorio Principal",
    category: "Residencial",
    image: project3,
    description: "Ambiente sereno con texturas suaves y iluminación sofisticada"
  },
  {
    id: 4,
    title: "Baño Contemporáneo",
    category: "Residencial",
    image: project4,
    description: "Spa privado con materiales de lujo y diseño funcional"
  },
  {
    id: 5,
    title: "Oficina en Casa",
    category: "Comercial",
    image: project5,
    description: "Espacio de trabajo inspirador con luz natural"
  },
  {
    id: 6,
    title: "Comedor Elegante",
    category: "Residencial",
    image: project6,
    description: "Área social sofisticada para reuniones familiares"
  }
];

const ProjectGallery = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4 font-display">
            Proyectos
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de espacios diseñados con atención al detalle y pasión por la excelencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group cursor-pointer ${
                index % 3 === 1 ? 'md:mt-12' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-lg shadow-elegant group-hover:shadow-hover transition-smooth">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-6">
                    <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90 mb-2">{project.category}</p>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;