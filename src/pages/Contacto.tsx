import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";

const Contacto = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
    </div>
  );
};

export default Contacto;