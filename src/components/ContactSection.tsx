import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 font-display">
          Contacto
        </h2>
        <div className="w-16 h-px bg-accent mx-auto mb-12"></div>
        
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente? Me encantaría conocer tus ideas y 
          ayudarte a crear el espacio de tus sueños.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center p-6">
            <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center mb-4">
              <Mail className="w-5 h-5 text-accent-foreground" />
            </div>
            <h3 className="font-medium text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">maria@interiordesign.com</p>
          </div>
          
          <div className="flex flex-col items-center p-6">
            <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center mb-4">
              <Phone className="w-5 h-5 text-accent-foreground" />
            </div>
            <h3 className="font-medium text-foreground mb-2">Teléfono</h3>
            <p className="text-muted-foreground">+52 55 1234 5678</p>
          </div>
          
          <div className="flex flex-col items-center p-6">
            <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-accent-foreground" />
            </div>
            <h3 className="font-medium text-foreground mb-2">Ubicación</h3>
            <p className="text-muted-foreground">Ciudad de México</p>
          </div>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="#" 
            className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
        
        <Button 
          size="lg" 
          className="bg-accent-gradient hover:opacity-90 text-accent-foreground px-8 py-3 transition-smooth"
        >
          Iniciar Conversación
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;