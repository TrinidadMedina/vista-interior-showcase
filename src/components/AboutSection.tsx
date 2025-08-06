const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 font-display">
              Sobre Mí
            </h2>
            <div className="w-16 h-px bg-accent mb-8"></div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Con más de 8 años de experiencia en arquitectura de interiores, 
                me especializo en crear espacios que no solo son visualmente 
                impactantes, sino que también mejoran la calidad de vida de 
                quienes los habitan.
              </p>
              
              <p>
                Mi enfoque se basa en la comprensión profunda de las necesidades 
                y personalidad de cada cliente, traduciendo sus sueños en realidades 
                tangibles a través del diseño funcional y estético.
              </p>
              
              <p>
                Cada proyecto es una oportunidad para explorar nuevas ideas, 
                materiales innovadores y soluciones creativas que definen 
                espacios únicos y atemporales.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-accent-gradient p-8 rounded-lg shadow-elegant">
              <h3 className="text-2xl font-medium text-accent-foreground mb-6">
                Servicios
              </h3>
              <ul className="space-y-4 text-accent-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-foreground rounded-full mr-4"></div>
                  Diseño de Interiores Residenciales
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-foreground rounded-full mr-4"></div>
                  Espacios Comerciales
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-foreground rounded-full mr-4"></div>
                  Consultoría en Decoración
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-foreground rounded-full mr-4"></div>
                  Remodelaciones Integrales
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-foreground rounded-full mr-4"></div>
                  Selección de Mobiliario
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;