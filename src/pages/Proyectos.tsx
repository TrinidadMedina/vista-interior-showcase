import Navigation from "@/components/Navigation";
import ProjectGallery from "@/components/ProjectGallery";

const Proyectos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <ProjectGallery />
      </div>
    </div>
  );
};

export default Proyectos;