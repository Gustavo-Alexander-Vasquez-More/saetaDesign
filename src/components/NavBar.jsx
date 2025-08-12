import React, { useState, useEffect } from 'react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <nav className={`w-full fixed top-0 left-0 z-50 text-white transition-colors duration-300  ${scrolled ? 'bg-[#051d8a] shadow-lg backdrop-blur' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center">
            {/* Reemplaza el src por la ruta de tu logo */}
            <img src="/saetaLogo1.png" alt="Saeta Design Logo" className="h-12 w-auto" />
          </div>
          {/* Menú grande */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#home" className="group relative hover:text-white transition-colors font-medium after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-white after:rounded-full after:transition-all after:duration-300 hover:after:w-full">Inicio</a>
            <a href="#about-us" className="group relative hover:text-white transition-colors font-medium after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-white after:rounded-full after:transition-all after:duration-300 hover:after:w-full">Sobre Nosotros</a>
            <a href="#servicios" className="group relative hover:text-white transition-colors font-medium after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-white after:rounded-full after:transition-all after:duration-300 hover:after:w-full">Servicios</a>
            <a href="#portfolio" className="group relative hover:text-white transition-colors font-medium after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-white after:rounded-full after:transition-all after:duration-300 hover:after:w-full">Portafolio</a>
            <a href="#contacto" className="ml-4 group relative hover:text-white transition-colors font-medium after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-white after:rounded-full after:transition-all after:duration-300 hover:after:w-full">Contacto</a>
          </div>
          {/* Botón hamburguesa */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-label="Abrir menú"
            >
              <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Menú móvil */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#051d8a] text-white shadow-lg z-50 animate-slide-down">
          <div className="flex flex-col items-center space-y-6 py-6">
            <a href="#inicio" className="group relative hover:text-white text-lg font-medium after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-white after:rounded-full after:transition-all after:duration-300 hover:after:w-full" onClick={() => setMenuOpen(false)}>Inicio</a>
            <a href="#servicios" className="group relative hover:text-white text-lg font-medium after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-white after:rounded-full after:transition-all after:duration-300 hover:after:w-full" onClick={() => setMenuOpen(false)}>Servicios</a>
            <a href="#portafolio" className="group relative hover:text-white text-lg font-medium after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-white after:rounded-full after:transition-all after:duration-300 hover:after:w-full" onClick={() => setMenuOpen(false)}>Portafolio</a>
            <a href="#quienes-somos" className="group relative hover:text-white text-lg font-medium after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-white after:rounded-full after:transition-all after:duration-300 hover:after:w-full" onClick={() => setMenuOpen(false)}>Quiénes Somos</a>
            <a href="#contacto" className="group relative hover:text-white text-lg font-medium after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-white after:rounded-full after:transition-all after:duration-300 hover:after:w-full" onClick={() => setMenuOpen(false)}>Contacto</a>
          </div>
        </div>
      )}
      {/* Animación personalizada para el menú móvil */}
      <style>{`
        @keyframes slide-down {
          0% { transform: translateY(-100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}
