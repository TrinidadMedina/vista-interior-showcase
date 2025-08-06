import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground mb-6 font-display">
            María Elena Vázquez
          </h1>
          <div className="w-24 h-px bg-accent mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
            Arquitecta Interiorista
          </p>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Creando espacios únicos que reflejan la personalidad y estilo de vida de cada cliente, 
          combinando funcionalidad y elegancia en cada proyecto.
        </p>
        
        <Link to="/proyectos">
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-3 text-foreground border-foreground hover:bg-foreground hover:text-background transition-smooth"
          >
            Ver Proyectos
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Home;