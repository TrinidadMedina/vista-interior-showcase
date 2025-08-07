import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Home = () => {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  
  const images = [
    '/src/assets/image.png',
    '/src/assets/image2.png',
    '/src/assets/image3.png',
    '/src/assets/image4.png',
    '/src/assets/image5.png',
    '/src/assets/image6.png',
    '/src/assets/image7.png',
    '/src/assets/image8.png',
    '/src/assets/image9.png',
    '/src/assets/image10.png',
    '/src/assets/image11.png',
    '/src/assets/image12.png',
    '/src/assets/image13.png',
    '/src/assets/image14.png',
    '/src/assets/project-1.jpg',
    '/src/assets/project-2.jpg',
    '/src/assets/project-3.jpg',
    '/src/assets/project-4.jpg'
  ];

  const imagePositions = [
    { left: '15%', top: '15%' },
    { left: '75%', top: '8%' },
    { left: '45%', top: '25%' },
    { left: '20%', top: '45%' },
    { left: '65%', top: '40%' },
    { left: '10%', top: '60%' },
    { left: '80%', top: '55%' },
    { left: '50%', top: '50%' },
    { left: '30%', top: '65%' },
    { left: '60%', top: '20%' },
    { left: '35%', top: '12%' },
    { left: '85%', top: '30%' },
    { left: '25%', top: '32%' },
    { left: '55%', top: '65%' },
    { left: '70%', top: '12%' },
    { left: '5%', top: '35%' },
    { left: '40%', top: '60%' },
    { left: '75%', top: '45%' }
  ];

  useEffect(() => {
    images.forEach((_, index) => {
      setTimeout(() => {
        setVisibleImages(prev => [...prev, index]);
      }, index * 800);
    });
  }, []);

  return (
    <section className="min-h-screen h-[120vh] relative bg-background overflow-x-hidden overflow-y-auto">
      {/* Galería animada de fondo */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-1000 ease-out ${
              visibleImages.includes(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              left: imagePositions[index].left,
              top: imagePositions[index].top,
              zIndex: index + 1,
            }}
          >
            <img
              src={image}
              alt={`Proyecto ${index + 1}`}
              className="max-w-xs object-cover rounded-lg shadow-2xl"
            />
          </div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="fixed z-10 top-1/2 transform -translate-y-1/2 left-12 md:left-16">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground mb-2 md:mb-3 font-display">
            MAFFEI
          </h1>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground mb-6 font-display">
            WORKS
          </h1>
          {/* <div className="w-24 h-px bg-accent mx-auto mb-6"></div> */}
        </div>
        
        {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Creando espacios únicos que reflejan la personalidad y estilo de vida de cada cliente, 
          combinando funcionalidad y elegancia en cada proyecto.
        </p> */}
        
        {/* <Link to="/proyectos">
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-3 text-foreground border-foreground hover:bg-foreground hover:text-background transition-smooth"
          >
            Ver Proyectos
          </Button>
        </Link> */}
      </div>

      {/* Margen inferior sin fotos */}
      <div className="h-96 bg-background"></div>
    </section>
  );
};

export default Home;