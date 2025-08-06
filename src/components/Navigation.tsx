import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm shadow-elegant' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/"
            className="text-xl font-light tracking-wide text-foreground hover:text-accent transition-smooth font-display"
          >
            MEV
          </Link>
          
          <div className="flex space-x-8 mx-auto">
            <Link 
              to="/"
              className={`text-foreground hover:text-accent transition-smooth ${
                location.pathname === '/' ? 'text-accent' : ''
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/proyectos"
              className={`text-foreground hover:text-accent transition-smooth ${
                location.pathname === '/proyectos' ? 'text-accent' : ''
              }`}
            >
              Proyectos
            </Link>
            <Link 
              to="/sobre-mi"
              className={`text-foreground hover:text-accent transition-smooth ${
                location.pathname === '/sobre-mi' ? 'text-accent' : ''
              }`}
            >
              Sobre Mí
            </Link>
            <Link 
              to="/contacto"
              className={`text-foreground hover:text-accent transition-smooth ${
                location.pathname === '/contacto' ? 'text-accent' : ''
              }`}
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;